"use client"
import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';
import SuccessModal from '@/components/SuccessModal';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

const Cart = () => {
    const [cart, setCart] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
    });
    const router = useRouter();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    const handleRemoveFromCart = (id: number) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    };

    const handleQuantityChange = (id: number, delta: number) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                if (newQuantity > 0) {
                    return { ...item, quantity: newQuantity };
                }
            }
            return item;
        });

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(false);
        setIsModalOpen2(true);
        setSuccessMessage("Your Order Have Been Placed Successfully");
        localStorage.removeItem('cart');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">Your Shopping Cart</h1>
                {cart.length === 0 ? (
                    <div className="text-center text-gray-600">Your cart is empty</div>
                ) : (
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                        {cart.map((product) => (
                            <div key={product.id} className="flex flex-col md:flex-row items-center mb-6 border-b pb-6">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-24 w-24 object-cover rounded-lg border mb-4 md:mb-0 md:mr-4"
                                />
                                <div className="flex-grow flex flex-col justify-center items-center gap-2">
                                    <h2 className="text-xl font-semibold text-gray-900 text-center">{product.title}</h2>
                                    <p className="text-lg text-gray-700">Price: ${product.price.toFixed(2)}</p>
                                    <div className="flex items-center space-x-4 mt-2">
                                        <button
                                            onClick={() => handleQuantityChange(product.id, -1)}
                                            className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-600"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-medium">{product.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(product.id, 1)}
                                            className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-green-600"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-col ml-0 md:ml-6 mt-4 md:mt-0">
                                    <p className="text-lg font-bold text-gray-900">
                                        ${(product.price * product.quantity).toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => handleRemoveFromCart(product.id)}
                                        className="text-red-500 mt-2 hover:text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center md:justify-end mt-6">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-yellow-600"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                cart={cart}
                form={form}
                handleInputChange={handleInputChange}
            />

            <SuccessModal
                isOpen={isModalOpen2}
                onClose={() => router.push('/')}
                vCart={false}
                message={successMessage}
            />
        </div>
    );
};

export default Cart;
