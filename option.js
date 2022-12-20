import { Schema, model } from 'mongoose';

const OptionSchema = new Schema(
  {
    pollId: {
      type: Schema.Types.ObjectId, required: true, ref: 'poll',
    },
    option: { type: String },
    correct: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('option', OptionSchema);
