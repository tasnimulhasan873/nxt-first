import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // You can add Credentials provider here if needed
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // Allow all users to sign in
            return true;
        },
        async redirect({ url, baseUrl }) {
            // Always redirect to /products after login
            return "/products";
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
