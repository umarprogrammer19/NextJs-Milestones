import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  cart: Product[];
  form: {
    name: string;
    email: string;
    address: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, cart, form, handleInputChange }) => {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checkout</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Summary</h3>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty</p>
          ) : (
            <div>
              {cart.map((product) => (
                <div key={product.id} className="flex items-center mb-4 border-b pb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-20 w-20 object-cover rounded-lg border mr-4"
                  />
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-900">{product.title}</h4>
                    <p className="text-gray-700">Price: ${product.price.toFixed(2)}</p>
                    <p className="text-gray-700">Quantity: {product.quantity}</p>
                    <p className="text-gray-700 font-bold">Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <div className="text-lg font-bold text-gray-900">
                Total: ${calculateTotal()}
              </div>
            </div>
          )}
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-full p-2 border rounded-md"
            required
          />
          <textarea
            name="address"
            value={form.address}
            onChange={handleInputChange}
            placeholder="Address"
            rows={4}
            className="w-full p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-full"
          >
            Place Order
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Modal;
