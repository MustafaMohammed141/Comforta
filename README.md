# Comforta - Furniture E-Commerce Website

This is Team 1's final project - a furniture e-commerce website built with React, Vite, and Tailwind CSS.

## Features

- Browse furniture products by category
- View product details
- Add products to cart
- Responsive design for all devices
- Products data served from JSON Server

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running the Application

The application requires two processes to run simultaneously:

### 1. Start the JSON Server (API)

```bash
npm run server
```

This will start the JSON Server on port 3001, serving the product data from `data/db.json`.

### 2. Start the React Application

In a new terminal window, run:

```bash
npm run dev
```

This will start the Vite development server, typically on port 5173.

## Accessing the Application

- React App: http://localhost:5173
- JSON Server API: http://localhost:3001

## API Endpoints

- GET all products: http://localhost:3001/products
- GET a single product: http://localhost:3001/products/{id}

## Project Structure

- `/src` - React application source code
- `/data` - JSON data files for the API
- `/public` - Static assets

## Technologies Used

- React
- Vite
- Tailwind CSS
- Axios for API requests
- JSON Server for mock API
# This is Team 1 final project
