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
    type: { type: String, enum : ['TEXT', 'LONGTEXT', 'CHECKBOX', 'SINGLE SELECT', 'URL', 'MULTI SELECT'], default: 'TEXT' }, 
  },
  {
    timestamps: true,
  },
);

export default model('registrationQue', RegistrationQuestionSchema);