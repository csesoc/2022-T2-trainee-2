import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  Name: { type: String, required: true },
  sub: { type: String },
  age: { type: Number, min: 16 },
  description: { type: String, required: true },
  interests: String,
  //   showLocation: { type: Boolean, default: false },
  // dayAvailabilities: [Boolean], // array of 7
  tags: [String], // array of 8 max

  matches: [
    {
      matchedWithUsername: String,
      matchStatus: { type: Boolean, default: false }, // pending == false, matched == true
    },
  ],

  socials: [
    {
      platform: String,
      username: String,
    },
  ],
  showSocials: { type: Boolean, default: false },
});

export default mongoose.model('User', UserSchema, 'user');
