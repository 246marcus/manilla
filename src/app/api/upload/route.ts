import { NextRequest, NextResponse } from 'next/server';
import { uploadImage } from '../../lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { message: 'No image file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { message: 'File must be an image' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { message: 'Image size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Upload to Cloudinary
    const imageUrl = await uploadImage(file);

    return NextResponse.json(
      { 
        message: 'Image uploaded successfully',
        imageUrl 
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { message: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
