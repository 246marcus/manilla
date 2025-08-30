# Admin Authentication Setup

## Prerequisites

1. Node.js and npm installed
2. MongoDB installed and running (or MongoDB Atlas account)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Environment Variables

Create a `.env.local` file in the project root with the following content:

```bash
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/manilla

# JWT Configuration  
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Environment
NODE_ENV=development
```

**Note:** If using MongoDB Atlas, replace the MONGODB_URI with your Atlas connection string.

### 3. Set up MongoDB

#### Option A: Local MongoDB
```bash
# Install MongoDB using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb/brew/mongodb-community
```

#### Option B: MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string and update the `MONGODB_URI` in your `.env.local` file

### 4. Create Admin User

Run the following command to create an admin user:

```bash
node scripts/create-admin.js
```

This will create a user with:
- Email: `admin@manilla.com`
- Password: `admin123`

**Important:** Change these credentials in production!

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Access Admin Panel

Navigate to `http://localhost:3000/admin/login` and use the credentials created in step 4.

## Troubleshooting

### Server Error on Login
- Ensure MongoDB is running
- Check that `.env.local` file exists with correct variables
- Verify the admin user was created successfully

### Redirect Loop
- The middleware has been fixed to prevent redirect loops on the login page
- Clear browser cookies if you're still experiencing issues

### Database Connection Issues
- Check if MongoDB is running: `brew services list | grep mongodb`
- Verify your connection string in `.env.local`
- For Atlas, ensure your IP is whitelisted
