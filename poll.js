import { Schema, model } from 'mongoose';

const PollSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    question: { type: String },
    options: [{ type: Schema.Types.ObjectId, ref: 'option' }],
    duration: { type: String },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('poll', PollSchema);