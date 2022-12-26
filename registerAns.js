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
        type: Schema.Types.ObjectId, required: true, ref: 'registrationQue',
      },
    ans: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('registrationAnswers', RegistrationAnsSchema);