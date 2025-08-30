import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error("MONGODB_URI is not set");

declare global {
  var mongooseCache:
    | { conn: any | null; promise: Promise<any> | null }
    | undefined;
}

const cached =
  global.mongooseCache ||
  (global.mongooseCache = { conn: null, promise: null });

export default async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
