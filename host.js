import { Schema, model } from 'mongoose';

const Hostchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    userId: {
      type: Schema.Types.ObjectId, required: true, ref: 'user',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    desigination: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('host', Hostchema);