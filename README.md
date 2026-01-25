App Restaurant (Challenge 7)

A mini end‑to‑end restaurant ordering application built with Next.js, Redux Toolkit, and TypeScript.
From browsing restaurants → selecting menus → cart → checkout → order history.
A complete data‑flow loop.

A. OVERVIEW

Foody is a small but complete food‑ordering web app created as part of Bootcamp Challenge 7.

The goal of this challenge was not only to render data from an API, but to design a realistic application flow:

Restaurant → Menu → Cart → Checkout → Orders

This project demonstrates:

Modular React architecture

Global state management using Redux Toolkit

Typed data flow with TypeScript

Client‑side routing with Next.js App Router

Clean UX for a basic ordering experience

B. USER FLOW

Browse Restaurants
Users see a list of restaurants fetched from API.

View Restaurant Menu
Clicking a restaurant opens its menu page.

Add to Cart
Users add menu items to cart and manage quantity.

Cart Page

View items

Increase / decrease quantity

Remove items

Clear cart

See total price

Checkout Page

Review order summary

Input:

Customer name

Table number

Optional note

Submit order

Orders Page

View all submitted orders

See:

Customer name

Table number

Items & quantities

Total price

Timestamp

Notes (if any)


C. TECH STACK

Next.js 14+ (App Router)

React 18

TypeScript

Redux Toolkit

React‑Redux

Axios

Tailwind CSS

D. Project Structure

src/
├── app/ # Next.js App Router pages
│ ├── layout.tsx
│ ├── page.tsx # Home (restaurants)
│ ├── restaurants/[id]/page.tsx
│ ├── cart/page.tsx
│ ├── checkout/page.tsx
│ └── orders/page.tsx
│
├── components/ # Reusable UI components
│ ├── Navbar.tsx
│ ├── cart/CartItemRow.tsx
│ ├── RestaurantCard.tsx
│ └── ProductCard.tsx
│
├── features/ # Redux slices + hooks
│ ├── cart/
│ │ ├── cartSlice.ts
│ │ └── hooks.ts
│ └── orders/
│ ├── orderSlice.ts
│ └── hooks.ts
│
├── services/ # API services
│ ├── useRestaurants.ts
│ └── useMenu.ts
│
├── store/
│ └── index.ts # Redux store setup
│
├── lib/ # Utilities
│ ├── axios.ts
│ └── format.ts
│
└── styles/
└── global.css


E. CORE FEATURES

1. Restaurant Listing

Fetches restaurant data from API

Displays restaurant name & rating

2. Menu Page

Fetches menu by restaurant ID

Displays menu cards

Add to cart button

3. Cart System (Redux)

State managed by cartSlice:

{
items: CartItem[]
totalQty: number
totalPrice: number
}

Supported actions:

addItem

removeItem

increaseQty

decreaseQty

clearCart

4. Checkout

Input fields:

Customer name

Table number

Optional note

On submit:

Creates Order object

Dispatches addOrder

Clears cart

Redirects to Orders page

5. Orders History

State managed by orderSlice:

type Order = {
id: string
customerName: string
tableNumber: string
note?: string
items: CartItem[]
total: number
createdAt: string
}

Displays:

Customer name

Table number

Timestamp

Ordered items

Total price

Optional note


F. DATA FLOW LOOP

Restaurants → Menu → Cart → Checkout → Orders
↑___________________________________|

This ensures:

Orders reflect actual cart content

Checkout summary matches cart state

Orders page reflects submitted orders

G. INSTALLATION & RUN

# install dependencies
npm install

# run development server
npm run dev

Open:

http://localhost:3000


G. CHALLENGE 7 OBJECTIVES (ALL MET)


H. FUTURE IMPROVEMENT

Out of challenge scope, but ready for production extension:

Authentication (login)

Backend persistence for orders

Branch / restaurant outlet selection

Payment gateway integration

Order status (preparing, ready, served)

Admin dashboard



Author

PURWITA MUSAFFA
