import { Schema, model } from 'mongoose';

const ProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    name: { type: String, required: true },
    username: { type: String, required: true },
    bio: { type: String },
    tagline: { type: String },
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    city: { type: String },
    profilePic: { type: Object },
    notificationCount: { type: Number, default: 0 },
    messageCount: { type: Number, default: 0 },
    shuffleCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isCommunity: { type: Boolean, default: false },
    socialMediaLinks: { type: Object },
    website: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('profile', ProfileSchema);
