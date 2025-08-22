
import Link from "next/link";

// Example mock products
const products = [
    { id: 1, name: "Wireless Headphones", description: "High quality sound.", price: 99 },
    { id: 2, name: "Smart Watch", description: "Track your fitness and notifications.", price: 149 },
    { id: 3, name: "Bluetooth Speaker", description: "Portable and powerful.", price: 59 },
];

export default function ProductDetailsPage({ params }) {
    const product = products.find((p) => p.id === Number(params.id));
    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="bg-white p-8 rounded shadow text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Product Not Found</h2>
                    <Link href="/products" className="text-indigo-500 hover:underline">Back to Products</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
            <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full">
                <h1 className="text-3xl font-bold text-indigo-700 mb-4">{product.name}</h1>
                <div className="text-gray-600 mb-4">{product.description}</div>
                <div className="text-indigo-600 font-bold text-xl mb-6">${product.price}</div>
                <Link href="/products" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm font-medium">Back to Products</Link>
            </div>
        </div>
    );
}
