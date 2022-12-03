import { Schema, model } from 'mongoose';

const MessageSchema = new Schema(
  {
    senderId: {
        type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    conversationId: {
        type: Schema.Types.ObjectId, required: true, ref: 'conversation',
    },
    message: {type: String },
  },
  {
    timestamps: true,
  },
);

export default model('message', MessageSchema);
