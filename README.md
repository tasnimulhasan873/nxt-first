# Nxt-App

A modern e-commerce demo app built with Next.js 15 (App Router), Firebase authentication, and Tailwind CSS. Features public and protected pages, product management, and a global light/dark theme toggle.

## Features

- Next.js 15 (App Router)
- Firebase authentication (Google & email/password)
- Public product list and details
- Protected dashboard and add product page
- Modern UI with Tailwind CSS
- Global light/dark theme toggle
- Responsive design

## Setup & Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd nxt-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure Firebase:**

   - Copy your Firebase config to `firebase.init.js` (replace placeholder values).
   - Enable Email/Password and Google authentication in your Firebase project.

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Route Summary

| Route                    | Access    | Description                                |
| ------------------------ | --------- | ------------------------------------------ |
| `/`                      | Public    | Landing page                               |
| `/products`              | Public    | Product list                               |
| `/products/[id]`         | Public    | Product details                            |
| `/login`                 | Public    | Login page (Google & credentials)          |
| `/dashboard`             | Protected | Dashboard with Add Product button          |
| `/dashboard/add-product` | Protected | Add Product form (requires authentication) |

- **Protected routes** require login. Unauthenticated users are redirected to `/login`.
- **Theme toggle** is available in the Navbar and works globally.

---

Feel free to customize and extend this project for your needs!

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
