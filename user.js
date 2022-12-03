import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    walletAddress: { type: String },
    email: { type: String },
    password: { type: String },
    verified: { type: Boolean, default: false },
    blocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('user', UserSchema);
