import { Schema, model } from 'mongoose';

const Hostchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, required: true, ref: 'user',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    roll: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('host', Hostchema);