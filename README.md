# ReSell Hub – Client (Frontend)

ReSell Hub is a modern, responsive, and secure **peer-to-peer second-hand marketplace** where users can buy and sell pre-owned products easily and safely.

This directory contains the frontend application of ReSell Hub, built with **Next.js App Router**, React, Tailwind CSS, DaisyUI, and modern web technologies.

---

## 🔗 Project Links

* **Live Website:** [ReSell Hub](https://resell-hub-client-three.vercel.app)
* **Client Repository:** [GitHub – ReSellHub Client](https://github.com/sabujAlom/resellHubClient)
* **Server Repository:** [GitHub – ReSellHub Server](https://github.com/sabujAlom/resellHubServer)

---

## 🛠️ Technology Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* DaisyUI
* HeroUI
* Framer Motion
* React Hook Form
* Axios
* React Icons
* React Hot Toast

### Authentication & Security

* Better Auth
* Email & Password Authentication
* Google OAuth
* Session Management
* JWT Authorization
* Role-Based Access Control (RBAC)

### Backend & Services

* Node.js
* Express.js
* MongoDB
* Stripe
* ImgBB

### Deployment

* Vercel
* MongoDB Atlas

---

# 🚀 Key Features

## 🌟 1. Marketplace Experience

* Browse second-hand products
* Dynamic category browsing
* Product search
* Product condition filtering
* Price sorting
* Latest product sorting
* Product pagination
* Product details page
* Seller information
* Responsive product cards

### Available Categories

* Electronics
* Furniture
* Fashion
* Mobile Phones
* Vehicles
* Home Appliances
* Sports & Fitness
* Books
* And more

---

## 🔐 2. Authentication & Authorization

ReSell Hub uses **Better Auth** for authentication and session management.

### Authentication Methods

* Email & Password Sign Up
* Email & Password Login
* Google OAuth Login
* Secure Session Management
* Logout
* Protected Routes

### JWT Authorization

Authenticated requests use JWT-based authorization to securely communicate with protected backend APIs.

---

# 👥 3. Role-Based Access Control

ReSell Hub provides different dashboards and permissions depending on the user's role.

### 🛒 Buyer

Buyers can:

* View buyer dashboard
* Browse products
* View product details
* Place orders
* Manage orders
* Cancel eligible orders
* Add products to wishlist
* Remove products from wishlist
* View payment history
* Submit product reviews
* Track marketplace activity

### 🏪 Seller

Sellers can:

* View seller dashboard
* Add new products
* Upload product images
* Edit products
* Delete products
* Manage product listings
* View incoming orders
* Update order status
* Track sales
* View sales analytics

### 👑 Admin

Admins can:

* View platform statistics
* Manage users
* Manage sellers and buyers
* Manage product listings
* Approve or reject products
* Monitor marketplace activity
* Manage platform settings
* Monitor transactions

---

# 🛍️ 4. Product Management

Sellers can create product listings with:

* Product title
* Price
* Category
* Condition
* Description
* Product images
* Location
* Stock / availability

The frontend communicates with the Express backend through REST APIs.

Supported operations:

* `GET` – Retrieve products
* `POST` – Create products
* `PATCH` – Update products
* `DELETE` – Delete products

---

# 🔎 5. Search, Filter & Sorting

Users can find products quickly using:

* Keyword search
* Category filtering
* Condition filtering
* Price sorting
* Latest product sorting
* Pagination

---

# ❤️ 6. Wishlist

Users can save products for future purchases.

Features include:

* Add product to wishlist
* Remove product from wishlist
* View saved products
* Manage wishlist from buyer dashboard

---

# ⭐ 7. Review & Rating System

Buyers can review products after purchasing.

Features:

* Product ratings
* Written reviews
* Review display
* Buyer feedback

---

# 💳 8. Stripe Payment Integration

ReSell Hub integrates **Stripe Checkout** for secure online payments.

### Payment Flow

1. Buyer selects a product.
2. Buyer proceeds to checkout.
3. A Stripe Checkout session is created.
4. Buyer is redirected to Stripe.
5. Payment is processed securely.
6. Order/payment status is updated.

---

# 🖼️ 9. Image Upload

Product images are uploaded using **ImgBB**.

Sellers can:

* Select images
* Upload images
* Preview images
* Store image URLs with product information

---

# 🎨 10. Modern Responsive UI

The application is fully responsive for:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

### UI Features

* Responsive layouts
* Dark / Light theme
* DaisyUI themes
* Tailwind CSS
* Framer Motion animations
* Interactive buttons
* Product cards
* Modal dialogs
* Toast notifications
* Loading states
* Skeleton loaders
* Responsive navigation
* Responsive dashboards

---

# ⚡ 11. Next.js App Router

The frontend uses the modern **Next.js App Router** architecture.

It includes:

* Server Components
* Client Components
* Dynamic routes
* Nested layouts
* Loading states
* Protected pages
* Server-side data handling
* Route-based organization

Example dynamic route:

```text
/categories/[category]
```

---

# 📁 Project Structure

```text
resellHubClient/
│
├── app/
│   ├── (auth)/
│   ├── dashboard/
│   ├── categories/
│   ├── products/
│   ├── login/
│   ├── register/
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Product/
│   ├── Dashboard/
│   └── Shared/
│
├── actions/
│
├── providers/
│
├── lib/
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

> Folder names may vary depending on the current implementation.

---

# 📦 NPM Packages

```text
next
react
react-dom
better-auth
axios
framer-motion
react-icons
react-hot-toast
react-hook-form
tailwindcss
daisyui
@heroui/react
```

---

# 🛠️ Local Development Setup

## 1. Clone Repository

```bash
git clone https://github.com/sabujAlom/resellHubClient.git
```

```bash
cd resellHubClient
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:5000
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
```

### Environment Variables

| Variable                      | Description            |
| ----------------------------- | ---------------------- |
| `NEXT_PUBLIC_API_URL`         | Backend API base URL   |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Better Auth server URL |
| `NEXT_PUBLIC_IMGBB_API_KEY`   | ImgBB API key          |

> For production, replace the local backend URL with the deployed backend URL.

---

# ▶️ Run Development Server

```bash
npm run dev
```

The application will normally run at:

```text
http://localhost:3000
```

---

# 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

# 🔒 Security

Never commit sensitive environment variables to GitHub.

Make sure `.env.local` is included in `.gitignore`.

Sensitive server-side variables should never be exposed in the frontend:

```text
BETTER_AUTH_SECRET
GOOGLE_CLIENT_SECRET
JWT_SECRET
MONGO_URI
STRIPE_SECRET_KEY
```

Only variables that are safe to expose to the browser should use the `NEXT_PUBLIC_` prefix.

---

# 🌐 Production Deployment

The frontend is deployed on **Vercel**.

Production environment variables must be configured in the Vercel project.

Example:

```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.vercel.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://your-backend-domain.vercel.app
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
```

After changing environment variables, redeploy the project so the updated values are included in the production build.

---

# 🔗 Backend

The frontend communicates with the ReSell Hub backend through REST APIs.

**Backend Repository:**

https://github.com/sabujAlom/resellHubServer

The backend handles:

* Authentication
* User management
* Product management
* Orders
* Wishlist
* Reviews
* Payments
* JWT authorization
* MongoDB operations
* Role-based authorization

---

# 🧪 Test Credentials

For assignment/project evaluation:

| Role       | Email                  | Password   | Dashboard Access            |
| ---------- | ---------------------- | ---------- | --------------------------- |
| **Admin**  | `admin@resellhub.com`  | `Pass1234` | User & Product Management   |
| **Seller** | `seller@resellhub.com` | `Pass1234` | Product & Order Management  |
| **Buyer**  | `buyer@resellhub.com`  | `Pass1234` | Orders, Wishlist & Payments |

You can also create a new account using the registration system.

---

# 📱 Responsive Design

ReSell Hub follows a mobile-first responsive design approach.

The interface adapts to:

```text
Mobile
   ↓
Tablet
   ↓
Laptop
   ↓
Desktop
```

---

# 🚀 Future Improvements

* Real-time buyer/seller chat
* Advanced product recommendation
* Location-based marketplace search
* Seller verification
* Advanced analytics
* Notification system
* Order tracking
* Promotional offers
* Improved product moderation
* Mobile application

---

# 🌱 Project Vision

ReSell Hub aims to make second-hand trading **simple, secure, affordable, and environmentally responsible**.

By keeping products in circulation for longer, ReSell Hub helps users save money while reducing unnecessary waste and supporting a more sustainable circular economy.

---

# 👨‍💻 Author

**MD. SABUJ ALOM**

ReSell Hub – A modern peer-to-peer second-hand marketplace platform.

---

## 📄 License

This project is developed for educational and portfolio purposes.
