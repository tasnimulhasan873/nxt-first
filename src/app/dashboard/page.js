
"use client";
import { useState } from "react";
import AddProductPage from "./add-product/page";

export default function DashboardPage() {
    const [showAddProduct, setShowAddProduct] = useState(false);

    if (showAddProduct) {
        return <AddProductPage />;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <button
                onClick={() => setShowAddProduct(true)}
                className="bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all text-lg mb-6"
            >
                Add Product
            </button>
            {/* You can add more dashboard widgets here later */}
        </div>
    );
}
