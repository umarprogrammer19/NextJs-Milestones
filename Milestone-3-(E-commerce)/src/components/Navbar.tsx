"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <span className="text-2xl font-bold text-gray-900 cursor-pointer">UF-Store</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:space-x-8">
                        <Link href="/">
                            <span className="text-[16.5px] text-zinc-950 bold hover:underline cursor-pointer">Home</span>
                        </Link>
                        <Link href="/about">
                            <span className="text-[16px] text-zinc-950 bold hover:underline cursor-pointer">About</span>
                        </Link>
                        <Link href="/contact">
                            <span className="text-[16px] text-zinc-950 bold hover:underline cursor-pointer">Contact</span>
                        </Link>
                        <Link href="/products">
                            <span className="text-[16px] text-zinc-950 bold hover:underline cursor-pointer">Products</span>
                        </Link>
                        <Link href="/cart">
                            <span className="text-[16px] text-zinc-950 bold hover:underline cursor-pointer">Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/">
                        <span className="block text-[16px] text-zinc-950 bold hover:underline cursor-pointer">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className="block text-[16px] text-zinc-950 bold hover:underline cursor-pointer">About</span>
                    </Link>
                    <Link href="/contact">
                        <span className="block text-[16px] text-zinc-950 bold hover:underline cursor-pointer">Contact</span>
                    </Link>
                    <Link href="/products">
                        <span className="block text-[16px] text-zinc-950 bold hover:underline cursor-pointer">Products</span>
                    </Link>
                    <Link href="/cart">
                        <span className="text-[16px] text-zinc-950 bold hover:underline cursor-pointer">Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
