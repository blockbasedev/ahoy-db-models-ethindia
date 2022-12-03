import { Schema, model } from 'mongoose';

const TapSchema = new Schema(
  {
    profileId: {
        type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
        type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
	taps: [{ type: Schema.Types.ObjectId, ref: 'profile' }],
  },
  {
    timestamps: true,
  },
);

export default model('tap', TapSchema);
