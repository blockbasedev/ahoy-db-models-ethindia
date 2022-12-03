import { Schema, model } from 'mongoose';

const WaveSchema = new Schema(
  {
    profileId: {
        type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
        type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    wave: { type: Boolean, default: false },
    disable: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default model('wave', WaveSchema);