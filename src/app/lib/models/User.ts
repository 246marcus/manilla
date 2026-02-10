import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "admin" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export type UserDocument = mongoose.Document & {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  role: "admin" | "user";
  isActive: boolean;
};

const User = models.User || model<UserDocument>("User", UserSchema);
export default User;
