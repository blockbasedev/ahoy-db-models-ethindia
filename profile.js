import { Schema, model } from 'mongoose';

const ProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    name: { type: String, required: true },
    about: { type: String },
    twitterUserName: { type: String },
    telegram: { type: String },
    discord: { type: String },
    lensProfile: { type: Boolean },
  },
  {
      timestamps: true,
  },
  
);

export default model('profile', ProfileSchema);
