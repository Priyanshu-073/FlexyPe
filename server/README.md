# Shopper Profile Server

A Node.js/Express backend server for the Shopper Profile application with MongoDB authentication.

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcryptjs
- User profile management
- MongoDB integration
- CORS enabled for frontend communication

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (configured with the provided URI)
- npm or yarn

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Environment setup (already configured in `.env`):
```
PORT=5000
MONGODB_URI=mongodb+srv://priyanshudwivedi932:xELwgu5XUzOW8tVb@cluster0.inkckgv.mongodb.net/shopper_profile
JWT_SECRET=shopper_profile_jwt_secret_key_2026
NODE_ENV=development
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication Routes (`/api/auth`)

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}

Response:
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "email": "user@example.com",
    "name": "John Doe",
    "preferences": { ... },
    "interests": [],
    "createdAt": "2026-01-06T..."
  }
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "message": "Logged in successfully",
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### Get Current User (Protected)
```
GET /api/auth/me
Authorization: Bearer jwt_token_here

Response:
{
  "user": { ... }
}
```

#### Update User Profile (Protected)
```
PUT /api/auth/profile
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "name": "Jane Doe",
  "phone": "+1234567890",
  "avatar": "url_to_avatar",
  "bio": "User bio",
  "preferences": {
    "theme": "dark",
    "notifications": true,
    "newsletter": false
  },
  "interests": ["category1", "category2"]
}

Response:
{
  "message": "Profile updated successfully",
  "user": { ... }
}
```

## User Model

```javascript
{
  email: String (unique, required),
  password: String (hashed, required),
  name: String (required),
  phone: String,
  avatar: String,
  bio: String,
  preferences: {
    theme: String (light/dark, default: light),
    notifications: Boolean (default: true),
    newsletter: Boolean (default: false)
  },
  interests: [String],
  createdAt: Date,
  updatedAt: Date
}
```

## Authentication Flow

1. User registers or logs in
2. Server validates credentials and generates JWT token
3. Token is returned to client and stored in localStorage
4. Client includes token in Authorization header for protected routes
5. Server verifies token using the `protect` middleware

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200`: Success
- `201`: Created (registration)
- `400`: Bad Request (validation errors)
- `401`: Unauthorized (invalid token/credentials)
- `404`: Not Found
- `500`: Server Error

## Security Notes

- Passwords are hashed using bcryptjs with 10 salt rounds
- JWT tokens expire after 7 days
- Change `JWT_SECRET` in production to a strong, random value
- Never commit `.env` file with real credentials to version control
- The connection string contains credentials - keep it secure

## Database

The server uses MongoDB Atlas. The database name is `shopper_profile` (from the URI).

Collections:
- `users` - Stores user accounts and profiles

## CORS Configuration

CORS is enabled to allow requests from the frontend running on `http://localhost:5173` (Vite default).

To modify allowed origins, update the CORS configuration in `server.js`.

## Troubleshooting

### MongoDB Connection Failed
- Verify MongoDB Atlas credentials
- Check network access whitelist in MongoDB Atlas
- Ensure the database name in URI is correct

### Token Errors
- Clear localStorage and re-login
- Check that Authorization header format is: `Bearer <token>`
- Verify JWT_SECRET matches between server and client

### CORS Issues
- Check that frontend URL is allowed in CORS configuration
- Ensure Content-Type headers are correct (application/json)

## Development

### File Structure
```
server/
├── models/          # Database models (User.js)
├── routes/          # API routes (auth.js)
├── controllers/     # Route handlers (authController.js)
├── middleware/      # Auth middleware
├── server.js        # Main server file
├── package.json     # Dependencies
├── .env             # Environment variables
└── .gitignore       # Git ignore rules
```

### Adding New Features

1. Create route in `routes/`
2. Create controller in `controllers/`
3. Add model if needed in `models/`
4. Import and use in `server.js`

## License

MIT
