# Authentication System Setup - Complete Guide

## ✅ What's Been Configured

### Backend (Node.js/Express)
- ✅ User authentication system with JWT
- ✅ Password hashing with bcryptjs
- ✅ MongoDB integration
- ✅ Protected routes middleware
- ✅ User registration and login endpoints
- ✅ Profile management endpoints
- ✅ CORS configured for frontend communication

### Frontend (React)
- ✅ Enhanced AuthContext with real API calls
- ✅ Updated LoginForm component with error handling
- ✅ Updated SignUp component with validation
- ✅ Protected routes with loading state
- ✅ Token management in localStorage
- ✅ Environment variables configured

### Database (MongoDB)
- ✅ User schema with all necessary fields
- ✅ Password encryption on save
- ✅ Connection string configured

## 🚀 Quick Start

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Start the Backend Server
```bash
npm run dev
```
You should see: `Server running on port 5000`

### 3. Install Frontend Dependencies (if not already done)
```bash
cd client
npm install
```

### 4. Start Frontend Development Server
```bash
npm run dev
```
Frontend will run on `http://localhost:5173`

## 📝 Testing the Auth System

### Via Frontend UI:
1. Open `http://localhost:5173`
2. Click "Create Account"
3. Fill in: Name, Email, Password, Confirm Password
4. Click "Create Account"
5. You'll be logged in and redirected to profile page

### Via API (using tools like Postman or cURL):

**Register:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Get Current User (use token from login/register response):**
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 🔑 Key Files Modified/Created

### New Backend Files:
- `server/server.js` - Main server file
- `server/models/User.js` - MongoDB user schema
- `server/controllers/authController.js` - Auth logic
- `server/routes/auth.js` - Auth endpoints
- `server/middleware/auth.js` - JWT verification
- `server/.env` - Environment variables
- `server/package.json` - Dependencies

### Updated Frontend Files:
- `client/src/context/AuthContext.jsx` - API integration
- `client/src/components/auth/LoginForm.jsx` - Real authentication
- `client/src/components/auth/SignUp.jsx` - Real registration
- `client/src/components/common/ProtectedRoute.jsx` - Loading state
- `client/.env.local` - API URL configuration

### Styling:
- `client/src/App.css` - Added error/success message styles

## 🔒 How Authentication Works

1. **Registration**: User provides name, email, password → API creates account → JWT token returned
2. **Login**: User provides email, password → API verifies credentials → JWT token returned
3. **Token Storage**: Token saved in `localStorage`
4. **Protected Routes**: Token sent in `Authorization: Bearer <token>` header
5. **Auto-login**: On page reload, if token exists in localStorage, user is auto-logged in

## 📊 User Data Structure

When logged in, the user object contains:
```javascript
{
  _id: "unique_id",
  email: "user@example.com",
  name: "John Doe",
  phone: "",
  avatar: "",
  bio: "",
  preferences: {
    theme: "light",
    notifications: true,
    newsletter: false
  },
  interests: [],
  createdAt: "2026-01-06T...",
  updatedAt: "2026-01-06T..."
}
```

## ⚙️ Configuration Details

### Environment Variables (Server)
- `PORT`: 5000 (API server port)
- `MONGODB_URI`: MongoDB connection string (with credentials)
- `JWT_SECRET`: Secret key for signing JWT tokens
- `NODE_ENV`: development/production

### Environment Variables (Client)
- `VITE_API_URL`: http://localhost:5000/api (backend API URL)

## 🐛 Troubleshooting

### Server won't connect to MongoDB
```
✓ Verify MongoDB Atlas credentials in .env
✓ Check network access whitelist in MongoDB Atlas
✓ Ensure IP is whitelisted
```

### Login/Register buttons not working
```
✓ Check that server is running on port 5000
✓ Verify VITE_API_URL in client/.env.local
✓ Check browser console for error messages
✓ Ensure MongoDB connection is successful
```

### Token errors
```
✓ Clear localStorage: localStorage.clear()
✓ Re-login to get new token
✓ Check that token is being sent in Authorization header
```

### CORS errors
```
✓ Ensure server is running with CORS enabled
✓ Frontend URL must match CORS configuration
✓ Check Content-Type headers are application/json
```

## 📚 Next Steps

You can now:
1. ✅ Register new users
2. ✅ Login existing users
3. ✅ Protect routes that require authentication
4. ✅ Update user profiles
5. ✅ Implement more features (orders, analytics, etc.)

For adding more features:
- Add new routes in `server/routes/`
- Add new controllers in `server/controllers/`
- Add new models in `server/models/`
- Update frontend components to call new endpoints

## 🎯 What's Ready to Use

- User registration with validation
- User login with JWT tokens
- Protected API routes
- Auto-login on page refresh
- Token-based session management
- User profile updates
- Error handling and loading states
- CORS configuration

Enjoy! 🎉
