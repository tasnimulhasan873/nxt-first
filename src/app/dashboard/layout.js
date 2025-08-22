"use client";

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 py-10 px-4">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Dashboard</h1>
                {children}
            </div>
        </div>
    );
}
