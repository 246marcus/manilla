import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
  },
  { timestamps: true }
);

export type UserDocument = mongoose.Document & {
  email: string;
  passwordHash: string;
  role: "admin";
};

const User = models.User || model<UserDocument>("User", UserSchema);
export default User;
