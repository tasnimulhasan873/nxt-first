

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase.init";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, loading, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/products");
        }
    }, [user, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    // Google login handler
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-200 via-purple-200 to-pink-100 py-10 px-4">
            <div className="bg-white/90 rounded-2xl shadow-2xl p-10 max-w-md w-full border border-teal-200">
                <h1 className="text-3xl font-extrabold text-teal-700 mb-6 text-center tracking-tight">Sign In</h1>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded shadow hover:from-teal-600 hover:to-purple-600 transition font-semibold mb-4"
                >
                    <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block mr-2"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.7 30.18 0 24 0 14.82 0 6.73 5.82 2.69 14.09l7.98 6.19C12.13 13.7 17.56 9.5 24 9.5z" /><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.02l7.19 5.59C43.93 37.13 46.1 31.3 46.1 24.55z" /><path fill="#FBBC05" d="M10.67 28.28c-1.04-3.1-1.04-6.46 0-9.56l-7.98-6.19C.64 16.7 0 20.27 0 24c0 3.73.64 7.3 1.69 10.47l7.98-6.19z" /><path fill="#EA4335" d="M24 48c6.18 0 11.36-2.05 15.15-5.57l-7.19-5.59c-2.01 1.35-4.59 2.16-7.96 2.16-6.44 0-11.87-4.2-13.33-9.97l-7.98 6.19C6.73 42.18 14.82 48 24 48z" /></g></svg>
                    Sign in with Google
                </button>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-teal-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-teal-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded shadow hover:from-teal-600 hover:to-purple-600 transition font-semibold"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login with Email"}
                    </button>
                </form>
                {error && <div className="text-red-500 text-sm mt-2 text-center">{error}</div>}
                <div className="mt-6 text-center">
                    <Link href="/" className="text-teal-600 hover:underline">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
