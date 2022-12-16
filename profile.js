import { Schema, model } from 'mongoose';

const ProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    profileImage: { type: String },
    name: { type: String },
    about: { type: String },
    twitter: { type: String },
    telegram: { type: String },
    discord: { type: String },
    isLens: { type: Boolean, default: false },
    isENS: { type: Boolean, default: false },
    lens: { type: String },
    ens: { type: String },
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    city: { type: String },
    notificationCount: { type: Number, default: 0 },
    messageCount: { type: Number, default: 0 },
    shuffleCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isCommunity: { type: Boolean, default: false },
    nftHash: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('profile', ProfileSchema);
