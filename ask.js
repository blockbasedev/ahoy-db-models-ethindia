import { Schema, model } from 'mongoose';

const AskSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    question: { type: String },
    replies: [{ type: Schema.Types.ObjectId, ref: 'reply' }],
    duration: { type: String },
    approve: { type: Boolean, default: false },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('ask', AskSchema);