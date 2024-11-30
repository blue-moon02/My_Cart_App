## Getting Started

# My Cart Project
A simple and fully functional shopping cart application built using Next.js, Tailwind CSS, and MongoDB. The project features a cart where users can add, view, and remove items dynamically. It includes both frontend and backend components, with the backend built using Node.js and MongoDB for data storage.

# Features
* Add Items: Cart items are fetched dynamically from the backend.
* Remove Items: Items can be removed from the cart.
* Responsive UI: Fully responsive UI with Tailwind CSS.

# Tech Stack
Frontend: Next.js (with TypeScript), Tailwind CSS
Backend: Node.js, MongoDB
Database: MongoDB

# Setup Instructions
1. Backend Setup
Install Node.js and MongoDB:
Ensure that you have both Node.js and MongoDB installed. You can install MongoDB by following the official MongoDB Installation Guide.

Clone the Repository: Clone the backend repository from your GitHub or local setup.

bash
Copy code
git clone <your-backend-repo-url>
cd my-cart-backend
Install Dependencies: Install the necessary Node.js packages using npm or yarn.

bash
Copy code
npm install
Start the Backend: Start the backend server.

bash
Copy code
npm run dev
The backend should now be running at http://localhost:5000.

2. Frontend Setup
Clone the Frontend Repository: Clone the frontend repository from your GitHub or local setup.

```
git clone <your-frontend-repo-url>
cd my-cart-frontend
```
Install Dependencies: Install the required frontend dependencies.
```
npm install
```

Run the backend server, it will show connected to MongoDB
```
npx ts-node ./backend/server.ts
```

then open a terminal and run the fronted(will run at port 3000)
```
npm run dev
```
OR
```
npm run build
npm run start
```

# Running Instructions
* Backend: Ensure your backend is running on http://localhost:5000. This server serves APIs for managing the cart items.
* Frontend: The frontend should be running on http://localhost:3000. This will be the interface where users can see and interact with the cart items.

# Additional Requirements and Dependencies
Backend Dependencies
* express: Web framework for Node.js.
* mongoose: MongoDB ODM for interacting with MongoDB.
* cors: Middleware to handle cross-origin requests.
* dotenv: For managing environment variables.
Frontend Dependencies
* next: React framework for building the frontend.
* tailwindcss: Utility-first CSS framework for styling.
* react: React library.
* react-dom: React package for rendering the components.
* typescript: TypeScript support for Next.js.

# Assumptions Made During Development
*MongoDB: MongoDB is running on localhost:27017. If MongoDB is installed on a different port or remotely, adjust the MONGO_URI in the .env file accordingly.

* API Base URL: The frontend assumes that the backend API is hosted locally at http://localhost:5000. If the backend is deployed remotely, the API URL in the frontend code should be updated.

* Authentication: For simplicity, this project assumes there is no user authentication. Anyone can add, remove, or view the cart.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
