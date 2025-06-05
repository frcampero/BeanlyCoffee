# Beanly Coffee ☕

**Beanly Coffee** is a modern eCommerce platform for specialty coffee lovers. Built with up-to-date technologies and a responsive design, it provides an intuitive and aesthetic shopping experience.

## 🚀 Technologies Used

- **Next.js** – React framework for modern web applications
- **Strapi** – Headless CMS for managing products and content
- **Stripe** – Secure payment integration
- **shadcn/ui** – Modern and accessible UI components
- **Tailwind CSS** – Fast and efficient styling

## 🎯 Features

- Browse coffees by flavor profile (sweet, citric, etc.)
- Product pages with detailed descriptions
- Shopping cart and Stripe-powered checkout
- "Favorites" system to save preferred products
- Headless backend with Strapi for admin management
- Responsive design for mobile and desktop

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/frcampero/BeanlyCoffee.git
cd beanly-coffee
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file with your environment variables:

```env
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=...
STRAPI_API_URL=http://localhost:1337
```

4. Run the project:

```bash
npm run dev
```

## 🧪 Backend (Strapi)

- Set up the backend in the corresponding folder (or separate repo)
- Create a "products" collection with fields like: name, description, flavor type, image, and price
- Configure Stripe through the developers panel

## 📄 License

MIT © 2025 Federico Campero