"use client";

import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
    const { user, logout } = useAuth();
    const { dark, setDark } = useTheme();
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-transparent shadow-none relative">
            <div className="font-extrabold text-2xl text-indigo-700 tracking-tight">MyShop</div>
            <div className="space-x-4 flex items-center">
                <Link href="/" className="font-semibold text-blue-600 hover:text-pink-500 transition-colors duration-200">Home</Link>
                <Link href="/products" className="font-semibold text-blue-600 hover:text-pink-500 transition-colors duration-200">Products</Link>
                {!user ? (
                    <Link href="/login" className="font-semibold text-blue-600 hover:text-pink-500 transition-colors duration-200">Login</Link>
                ) : (
                    <>
                        <Link href="/dashboard" className="font-semibold text-blue-600 hover:text-pink-500 transition-colors duration-200">Dashboard</Link>
                        <button
                            onClick={logout}
                            className="font-semibold text-white bg-pink-500 hover:bg-pink-600 px-4 py-1 rounded transition-colors duration-200 ml-2"
                        >
                            Logout
                        </button>
                    </>
                )}
                <button
                    onClick={() => setDark((d) => !d)}
                    className="ml-4 px-3 py-1 rounded-lg font-semibold shadow bg-white/80 dark:bg-gray-800 dark:text-white text-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    aria-label="Toggle theme"
                >
                    {dark ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}
