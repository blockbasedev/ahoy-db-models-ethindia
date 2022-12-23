import { Schema, model } from 'mongoose';

const RegistrationQuestionSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId, required: true, ref: 'profile',
    },
    eventId: {
      type: Schema.Types.ObjectId, required: true, ref: 'event',
    },
    question: { type: String },
    answer: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('registrationQuestion', RegistrationQuestionSchema);