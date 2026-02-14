The Personal Shopper Profile Page is a core module of the FlexyPe e-commerce ecosystem, designed to provide users with a centralized and personalized account management experience. It allows shoppers to manage their profile, track orders, update personal details, and monitor activity in a secure and intuitive interface.

This module focuses on clean UI, structured data handling, and seamless backend integration.

🚀 Features

User Information Management

View & edit name, email, phone number

Update profile picture

Change password securely

Order History

View past orders with status (Delivered, Pending, Cancelled)

Track order details

Download invoice (if integrated)

Address Management

Add, edit, delete shipping addresses

Set default address

Wishlist Overview

View saved products

Remove items from wishlist

Activity Dashboard

Quick stats: Total orders, Total spent, Saved items

Recent activity preview

Secure Authentication

JWT-based authentication

Protected routes

Role-based access control (Shopper only)

🛠️ Tech Stack

Frontend:

React.js

Redux / Context API (State Management)

Tailwind CSS / CSS Modules

Backend:

Node.js

Express.js

MongoDB (Mongoose ODM)

JWT Authentication

/client
  /components
  /pages
    Profile.jsx
    OrderHistory.jsx
    AddressManager.jsx
  /redux

/server
  /controllers
  /models
  /routes
  /middleware
🔐 Security Practices


Password hashing using bcrypt


Token-based authentication


Input validation & sanitization


Protected API endpoints



🎯 Purpose
The Shopper Profile Page ensures:


Better user engagement


Easy account management


Transparent order tracking


Improved user retention


It serves as the customer control center within the FlexyPe platform.

📌 Future Enhancements


Profile analytics & spending insights


Loyalty points system


Dark mode support


Real-time order status updates


Multi-device session management



👨‍💻 Author
Priyanshu Dwivedi
BTech CSE | Full-Stack Developer (MERN)

