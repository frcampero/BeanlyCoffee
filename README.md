# ☕ Beanly Coffee – E-commerce Platform

Beanly Coffee is a modern and elegant e-commerce web app designed for coffee lovers. Built with a full-stack architecture using **Strapi (backend)**, **PostgreSQL (database)**, and **Next.js (frontend)**, it offers a smooth shopping experience with real-time product data and secure payment integration.

---

## 🌐 Live Demo

👉 Frontend: [https://beanly-coffee-indol.vercel.app](https://beanly-coffee-indol.vercel.app)  
👉 Backend (Strapi Admin): Private (hosted on Render)  
👉 Database: PostgreSQL hosted on Railway

---

## ✨ Features

- 🛒 View featured coffee products by category
- 🔍 Filter by taste or origin (sweet, citric, etc.)
- 🖼️ Dynamic image loading via Strapi Media Library
- 💳 Stripe Checkout integration (test mode)
- ⚙️ Connected to a real backend (Strapi) with PostgreSQL
- 📱 Responsive UI with smooth animations

---

## 🧪 Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, TypeScript
- **Backend**: Strapi v5 (Node.js Headless CMS)
- **Database**: PostgreSQL (via Railway)
- **Hosting**:
  - Frontend: Vercel
  - Backend: Render
- **Payments**: Stripe (Test Mode)

---

## ⚠️ Notes

- This project is hosted on free-tier services.  
  The **backend may take a few seconds to wake up** after inactivity.
- Stripe payments are in **test mode** (no real charges).

---

## 🧑‍💻 Developer

**Federico Campero** – Full Stack Developer in progress  
[LinkedIn](https://www.linkedin.com/in/camperofederico/)  
[GitHub](https://github.com/frcampero)

---

## 🚀 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/frcampero/beanly-coffee.git
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Create a `.env.local` file:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://beanlycoffee-be.onrender.com
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here
   ```

4. Run locally:
   ```bash
   npm run dev
   ```

---

## 📦 Future Improvements

- 🐾 User authentication & order history
- 🧠 Product recommendations
- 🌍 Multilingual support