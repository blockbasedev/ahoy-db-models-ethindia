import { Schema, model } from 'mongoose';

const POAPSchema = new Schema(
  {
    profileId: {
        type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
        type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    information: { type: Object },
	drops: [{ type: Schema.Types.ObjectId, ref: 'profile' }],
  },
  {
    timestamps: true,
  },
);

export default model('poap', POAPSchema);
