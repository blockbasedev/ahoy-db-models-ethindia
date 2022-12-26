import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile', index: true,
    },
    eventType: { type: String },
    eventName: { type: String },
    huddleLink: { type: String },
    description: { type: String },
    location: { type: String },
    bannerPic: { type: String },
    eventRefLink: { type: String },
    generatedQR: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    duration: { type: Number, default: 0 },
    guestCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    referalCode: { type: String, index: true, unique: true },
    otherLink: { type: String },
    require: { type: Boolean, default: false },
    eventURL: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('event', EventSchema);
