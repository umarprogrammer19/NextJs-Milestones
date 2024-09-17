"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

const ProductsPage = () => {
    const [data, setData] = useState<Product[] | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Fetching API For Products Data
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const viewSingleProduct = (productId: number) => {
        router.push(`/products/${productId}`); // Navigate to the single product page
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
                {!data ? (
                    <div className="text-center">
                        <p className="text-3xl">Loading products....</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((product) => (
                            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-48 w-full object-cover mb-4"
                                />
                                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                                <button
                                    onClick={() => viewSingleProduct(product.id)}
                                    className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
                                >
                                    View Product
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;
