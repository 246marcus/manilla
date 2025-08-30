# Manilla - Next.js Blog Management System

This is a [Next.js](https://nextjs.org) project with admin dashboard, blog management, and newsletter subscription features.

## Features

- 🔐 **Admin Authentication** - Secure login with JWT
- 📝 **Blog Management** - Create, edit, delete, and publish blogs
- 📧 **Newsletter System** - Email collection and management
- 🖼️ **Cloudinary Integration** - Image upload and storage
- 📱 **Responsive Design** - Works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud)
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manilla
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/manilla
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Gmail Configuration (for sending emails)
   GMAIL_USER=your_gmail@gmail.com
   GMAIL_PASSWORD=your_app_password
   
   # Environment
   NODE_ENV=development
   ```

4. **Set up MongoDB**
   
   Start MongoDB locally or use a cloud service like MongoDB Atlas.

5. **Create admin user**
   ```bash
   node scripts/create-admin.js
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Cloudinary Setup

1. **Create a Cloudinary account** at [cloudinary.com](https://cloudinary.com)
2. **Get your credentials** from the Dashboard:
   - Cloud Name
   - API Key
   - API Secret
3. **Add them to your `.env.local`** file

## Gmail Setup (for Email Functionality)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Add to your `.env.local`**:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_PASSWORD`: The app password (not your regular password)

## Admin Access

- **URL**: `/admin/login`
- **Default credentials**: 
  - Email: `admin@manilla.com`
  - Password: `admin123`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout

### Blogs
- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create new blog (with image upload)
- `GET /api/blogs/[id]` - Get single blog
- `PUT /api/blogs/[id]` - Update blog
- `DELETE /api/blogs/[id]` - Delete blog

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/subscribe` - Get all subscribers
- `DELETE /api/newsletter/delete` - Delete subscribers

### Mail System
- `POST /api/mail` - Send email and save to database
- `GET /api/mail` - Get all sent emails
- `DELETE /api/mail/[id]` - Delete email record
- `POST /api/mail/reply` - Send reply to waitlist/contact submission
- `POST /api/mail/newsletter` - Send newsletter to all subscribers

### Image Upload
- `POST /api/upload` - Upload image to Cloudinary

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
