import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    eventName: { type: String },
    description: { type: String },
    location: { type: String },
    bannerPic: { type: Object },
    eventRefLink: { type: String },
    generatedQR: { type: String },
    date: { type: String },
    time: { type: String },
    duration: { type: Number, default: 0 },
    guestCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('event', EventSchema);
