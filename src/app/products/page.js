
import Link from "next/link";

// Example mock products
const products = [
    { id: 1, name: "Wireless Headphones", description: "High quality sound.", price: 99 },
    { id: 2, name: "Smart Watch", description: "Track your fitness and notifications.", price: 149 },
    { id: 3, name: "Bluetooth Speaker", description: "Portable and powerful.", price: 59 },
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
                            <div className="font-semibold text-lg text-indigo-800 mb-2">{product.name}</div>
                            <div className="text-gray-500 mb-2">{product.description}</div>
                            <div className="text-indigo-600 font-bold mb-4">${product.price}</div>
                            <Link href={`/products/${product.id}`} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm font-medium">Details</Link>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Link href="/" className="text-indigo-500 hover:underline">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
