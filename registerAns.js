import { Schema, model } from 'mongoose';

const RegistrationAnsSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    reQuestionId: {
        type: Schema.Types.ObjectId, required: true, ref: 'registrationQuestion',
      },
    ans: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('registrationAnsSchema', RegistrationAnsSchema);