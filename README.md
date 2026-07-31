# Shopping Cart App (React + Redux Toolkit)

A modern and responsive e-commerce shopping cart application built using **React.js**, **Redux Toolkit**, **Tailwind CSS**, and **Razorpay Payment Gateway**. The application allows users to browse products, add or remove items from the cart, view real-time cart totals, and complete purchases through Razorpay's secure checkout.

---

## Live Demo

https://shopping-cart-app-eta-five.vercel.app/

---

## Features

- Fetches product data from the FakeStore API
- Add products to the shopping cart
- Remove products from the shopping cart
- Real-time cart total calculation
- **Razorpay payment gateway integration** for secure checkout
- Order success page with payment confirmation and Payment ID
- Global state management using Redux Toolkit
- Client-side routing with React Router DOM
- Loading spinner during API requests
- Toast notifications for user actions
- Fully responsive design for desktop, tablet, and mobile devices

---

## Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- Tailwind CSS

### State Management

- Redux Toolkit
- React Redux

### Payment Gateway

- Razorpay Checkout.js

### Routing & Utilities

- React Router DOM
- React Hot Toast

### API

- FakeStore API

### Deployment

- Vercel

---

## Project Structure

```text
shopping-cart-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── Navbar.jsx
│   │   ├── Product.jsx
│   │   └── Spinner.jsx
│   │
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   └── OrderSuccess.jsx
│   │
│   ├── redux/
│   │   ├── Slices/
│   │   │   └── cartSlice.js
│   │   └── Store.js
│   │
│   ├── utils/
│   │   └── razorpay.js
│   │
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── index.js
│
├── Screenshots/
│   └── home.png
│
├── .env
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## How It Works

### Home Page

- Fetches product data from the FakeStore API
- Displays products using reusable Product components
- Shows a loading spinner while products are loading

### Cart Page

- Displays all selected products
- Calculates the total cart value dynamically
- Allows users to remove products from the cart
- Displays an empty cart state when no products are added
- **Checkout Now** button triggers Razorpay payment modal

### Payment Flow

- Clicking **Checkout Now** opens the Razorpay payment modal
- Supports test card payments (card: `4111 1111 1111 1111`, any future expiry, any CVV)
- On successful payment, the cart is cleared and the user is redirected to the **Order Success** page
- The Order Success page displays a payment confirmation with the Razorpay Payment ID
- On payment failure or dismissal, an error toast is shown and the cart remains intact

### State Management

- Cart state is managed globally using Redux Toolkit
- Actions and reducers are defined inside `cartSlice.js` (`add`, `remove`, `clearCart`)
- Uses `useSelector` and `useDispatch` for accessing and updating the store

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/ArshnoorSingh07/Shopping-Cart-App.git
```

### 2. Navigate to the project directory

```bash
cd Shopping-Cart-App
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a `.env` file in the root directory (or update the existing one) with your Razorpay test key:

```env
REACT_APP_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_HERE
```

You can get your test key from the [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys).

### 5. Start the development server

```bash
npm start
```

### 6. Build for production

```bash
npm run build
```

---

## Screenshots

### Home Page

![Home Page](Screenshots/home.png)

---

## Future Enhancements

- Increase and decrease product quantity
- Save cart data using Local Storage
- Product search functionality
- Category and price filters
- Backend integration for order creation and payment verification
- Dark mode support
- Wishlist functionality
- Order history page

---

## Author

**Arshnoor Singh**

- GitHub: https://github.com/ArshnoorSingh07
- Email: arshnoorsingh.05@gmail.com

---

## License

This project is intended for learning and educational purposes.