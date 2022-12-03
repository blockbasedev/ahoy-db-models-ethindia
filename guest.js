import { Schema, model } from 'mongoose';

const GuestSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    details: { type: Object },
    checkIn: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('guest', GuestSchema);