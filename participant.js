import { Schema, model } from 'mongoose';

const ParticipantSchema = new Schema(
  {
    profileId: {
        type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
        type: Schema.Types.ObjectId, required: true, ref: 'event',
      },
    pollId: {
        type: Schema.Types.ObjectId, required: true, ref: 'poll',
    },
    optionId: {
        type: Schema.Types.ObjectId, required: true, ref: 'option',
    },
  },
  {
    timestamps: true,
  },
);

export default model('participant', ParticipantSchema);