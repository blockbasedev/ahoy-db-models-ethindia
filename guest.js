import { Schema, model } from 'mongoose';

const GuestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, required: true, ref: 'user',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    tagline: { type: String },
    checkIn: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('guest', GuestSchema);