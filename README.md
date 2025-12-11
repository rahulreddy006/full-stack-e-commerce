🛒 Forever Ecommerce — Full-Stack MERN E-Commerce Application

A fully functional MERN stack e-commerce platform featuring user authentication, admin product management, cart system, Razorpay payments, and modern UI.
Built for real-world scalability and production-ready deployment.

🚀 Live Demo

🔗 Frontend: https://ecommerce-frontend-seven-red.vercel.app/

🔗 Backend (GitHub Repo): https://github.com/rahulreddy006/full-stack-e-commerce

📦 Tech Stack
Frontend

React.js

Redux Toolkit

Tailwind CSS

Axios

React Router

Backend

Node.js + Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt.js

Razorpay Integration

Cloud & Deployment

Vercel (Frontend)

Render/Other Node Hosting (Backend)

Cloudinary (Image Uploads)

⭐ Features
👤 User Features

Secure Login & Signup (JWT-based)

Browse products with filters

Add to Cart / Remove from Cart

Checkout with Razorpay Payments

Order tracking

Responsive UI for all devices

🛠️ Admin Features

Add / Edit / Delete Products

Manage Orders

Upload Product Images

Dashboard for analytics
## 📁 Project Structure

/client (React Frontend)
│── public
│── src
│   ├── components
│   ├── redux
│   ├── pages
│   ├── utils
│   └── App.js

/server (Node Backend)
│── controllers
│── models
│── routes
│── middlewares
│── config
│── index.js

⚙️ Environment Variables

Create a .env file inside /server with:

MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


🧑‍💻 Running the Project Locally
Frontend
cd client
npm install
npm start

Backend
cd server
npm install
npm run dev

🔥 API Endpoints Overview
Auth

POST /api/auth/register

POST /api/auth/login

Products

GET /api/products

POST /api/products (Admin)

PUT /api/products/:id (Admin)

DELETE /api/products/:id (Admin)

Orders

POST /api/orders

GET /api/orders/user/:id

GET /api/orders (Admin)

🖥️ Screenshots

(Add your screenshots here once ready — improves professionalism)

🧾 Project Highlights

Clean MERN architecture

Handles real-world e-commerce flows

Fully responsive UI

Razorpay live payment integration

Admin & User dashboards

🙌 Author

Rahul Reddy Kattegummula
🔗 GitHub: https://github.com/rahulreddy006

🔗 LinkedIn: https://www.linkedin.com/in/rahul-reddy-kattegummula

⭐ Support

If you like this project, consider giving it a ⭐ star on GitHub!

