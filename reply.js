import { Schema, model } from 'mongoose';

const ReplySchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    askId: {
      type: Schema.Types.ObjectId, required: true, ref: 'ask',
    },
    reply: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('reply', ReplySchema);