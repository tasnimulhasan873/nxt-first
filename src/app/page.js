
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-200 via-blue-100 to-purple-100 py-20">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-800 drop-shadow">Welcome to MyShop</h1>
        <p className="text-xl text-indigo-600 mb-8">Discover amazing products and manage your own!</p>
        <Link href="/products" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded shadow hover:from-indigo-600 hover:to-blue-600 transition text-lg font-semibold">View Products</Link>
      </section>

      {/* Product Highlights */}
      <section className="py-14 bg-white/80 backdrop-blur">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Product Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-8 border border-indigo-100 rounded-2xl shadow text-center bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="font-bold mb-2 text-indigo-700 text-lg">Fast Delivery</div>
              <div className="text-indigo-500">Get your products delivered quickly and safely.</div>
            </div>
            <div className="p-8 border border-indigo-100 rounded-2xl shadow text-center bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="font-bold mb-2 text-indigo-700 text-lg">Best Prices</div>
              <div className="text-indigo-500">We offer competitive prices on all products.</div>
            </div>
            <div className="p-8 border border-indigo-100 rounded-2xl shadow text-center bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="font-bold mb-2 text-indigo-700 text-lg">Quality Support</div>
              <div className="text-indigo-500">Our team is here to help you 24/7.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

