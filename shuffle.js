import { Schema, model } from 'mongoose';

const ShuffleSchema = new Schema(
  {
    profileId: {
        type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
        type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
	shuffles: [{ type: Schema.Types.ObjectId, ref: 'profile' }],
  },
  {
    timestamps: true,
  },
);

export default model('shuffle', ShuffleSchema);
