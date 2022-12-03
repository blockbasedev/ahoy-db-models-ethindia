import { Schema, model } from 'mongoose';

const ConversationSchema = new Schema(
  {
    profileId: {
        type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    members: [{ type: Schema.Types.ObjectId, ref: 'profile' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'message' }],
    mute: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('conversation', ConversationSchema);
