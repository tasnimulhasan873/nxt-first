import Link from "next/link";
import { FaHome, FaBoxOpen, FaSignInAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center px-8 py-4 bg-transparent shadow-none text-center mt-auto border-t border-indigo-100">
            <div className="font-extrabold text-2xl text-indigo-700 tracking-tight mb-2 sm:mb-0">MyShop</div>
            <div className="space-x-6 mb-2 sm:mb-0 flex items-center">
                <Link href="/" className="font-semibold text-blue-600 hover:text-pink-500 transition-colors duration-200 flex items-center gap-1"><FaHome /> Home</Link>
                <Link href="/products" className="font-semibold text-blue-600 hover:text-pink-500 transition-colors duration-200 flex items-center gap-1"><FaBoxOpen /> Products</Link>
                <Link href="/login" className="font-semibold text-blue-600 hover:text-pink-500 transition-colors duration-200 flex items-center gap-1"><FaSignInAlt /> Login</Link>
            </div>
            <span className="text-indigo-500 text-sm">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</span>
        </footer>
    );
}
