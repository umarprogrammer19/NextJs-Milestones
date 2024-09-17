import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    vCart?: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, message, vCart }) => {
     const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>
                <div className="flex items-center bg-green-100 border border-green-200 text-green-700 p-4 rounded-md mb-4">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg font-semibold">{message}</span>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                    >
                        Close
                    </button>
                    {vCart && <button
                        onClick={() => router.push('/cart')}
                        className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
                    >
                        View Cart
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
