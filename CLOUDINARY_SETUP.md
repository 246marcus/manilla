# Cloudinary Setup Guide

## Issue
The newsletter banner upload is failing with a 400 Bad Request error because Cloudinary is not properly configured.

## Solution

### 1. Create Environment Variables
Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

### 2. Get Your Cloudinary Cloud Name
1. Go to [Cloudinary Console](https://console.cloudinary.com/)
2. Sign in to your account
3. Copy your cloud name from the dashboard
4. Replace `your_cloud_name_here` with your actual cloud name

### 3. Verify Upload Preset
Make sure you have an upload preset named `manilla_uploads` in your Cloudinary account:
1. Go to Settings > Upload
2. Scroll to Upload presets
3. Create a new preset named `manilla_uploads`
4. Set it to "Unsigned" for client-side uploads

### 4. Restart Development Server
After adding the environment variable:
```bash
npm run dev
# or
yarn dev
```

## Alternative: Disable Banner Upload
If you don't need banner images, you can temporarily disable the banner upload feature by commenting out the banner section in `NewsletterModal.tsx`.

## Testing
Once configured, try uploading a banner image:
- File size should be under 5MB
- File type should be an image (jpg, png, gif, etc.)
- The image should upload successfully to Cloudinary
