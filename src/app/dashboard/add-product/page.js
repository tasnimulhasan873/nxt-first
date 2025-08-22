"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../hooks/useAuth";
import Link from "next/link";


export default function AddProductPage() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [toast, setToast] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [dark, setDark] = useState(false);

    // Toggle dark mode by adding/removing 'dark' class on <html>
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setToast("");
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, description, price }),
            });
            const data = await res.json();
            if (data.success) {
                setToast("Product added successfully!");
                setName("");
                setDescription("");
                setPrice("");
            } else {
                setToast("Failed to add product.");
            }
        } catch (err) {
            setToast("Error adding product.");
        } finally {
            setSubmitting(false);
            setTimeout(() => setToast(""), 3000);
        }
    };

    return (
        <div className={
            `min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ` +
            (dark
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'
                : 'bg-gradient-to-br from-teal-200 via-purple-200 to-pink-100')
        }>
            <button
                onClick={() => setDark((d) => !d)}
                className="absolute top-6 right-6 z-10 px-4 py-2 rounded-lg font-semibold shadow bg-white/80 dark:bg-gray-800 dark:text-white text-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                aria-label="Toggle theme"
            >
                {dark ? '🌙 Dark' : '☀️ Light'}
            </button>
            <div className={
                `backdrop-blur-md border shadow-2xl rounded-2xl p-10 max-w-md w-full transition-all ` +
                (dark
                    ? 'bg-gray-900/80 border-gray-700'
                    : 'bg-white/70 border-white/40')
            }>
                <h1 className={
                    `text-3xl font-extrabold mb-8 text-center drop-shadow ` +
                    (dark
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-300 to-pink-200'
                        : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-purple-600 to-pink-500')
                }>Add New Product</h1>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className={
                            `border-none rounded-lg px-4 py-3 shadow focus:outline-none transition ` +
                            (dark
                                ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-700'
                                : 'bg-white/80 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-teal-400')
                        }
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        className={
                            `border-none rounded-lg px-4 py-3 shadow focus:outline-none transition ` +
                            (dark
                                ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-700'
                                : 'bg-white/80 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-300')
                        }
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        className={
                            `border-none rounded-lg px-4 py-3 shadow focus:outline-none transition ` +
                            (dark
                                ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-700'
                                : 'bg-white/80 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-pink-300')
                        }
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required
                        min="0"
                        step="0.01"
                    />
                    <button
                        type="submit"
                        className={
                            `px-6 py-3 rounded-lg font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all disabled:opacity-60 ` +
                            (dark
                                ? 'bg-gradient-to-r from-teal-700 via-purple-700 to-pink-700 text-white'
                                : 'bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white')
                        }
                        disabled={submitting}
                    >
                        {submitting ? "Adding..." : "Add Product"}
                    </button>
                </form>
                {toast && (
                    <div className={
                        `mt-4 text-center px-4 py-2 rounded shadow font-semibold animate-fade-in-out ` +
                        (dark
                            ? 'bg-teal-700/90 text-white'
                            : 'bg-teal-500/90 text-white')
                    }>{toast}</div>
                )}
                <div className="mt-8 text-center">
                    <Link href="/products" className={dark ? "text-purple-300 hover:underline font-medium" : "text-purple-600 hover:underline font-medium"}>&larr; Back to Products</Link>
                </div>
            </div>
        </div>
    );
}
