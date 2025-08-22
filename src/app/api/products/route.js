// API route for products (GET, POST)
export async function GET() {
    // Return mock product list
    return Response.json([{ id: 1, name: 'Sample Product', description: 'A product', price: 10 }]);
}

export async function POST(request) {
    // Add product logic here
    return Response.json({ success: true });
}
