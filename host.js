import { Schema, model } from 'mongoose';

const HostSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    desigination: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('host', HostSchema);