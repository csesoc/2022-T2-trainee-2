import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        // Name: {type: String, required: true},
        // sub: {type: String},
        // age: {type: Number, min: 16},
        // description: {type: String, required: true},
        // interests: String,
        // showLocation: {type: Boolean, default: false},
        // dayAvailabilities: [Boolean], // array of 7
        // tags: [String], // array of 8 max
        
        // matches: [{
        //     matchedWithUsername: String,
        //     matchStatus: {type: Boolean, default: false} // pending == false, matched == true
        // }],
        
        // socials: [{
        //     platform: String,
        //     username: String
        // }], 
        // showSocials: {type: Boolean, default: false}
        image: {
            type: String, required: false
        },
        firstName: {
            type: String, required: true
        },
        lastName: {
            type: String, required: true
        },
        age: {
            type: Number, required: true
        },
        username: {
            type: String, required: true
        },
        password: {
            type: String, required: true
        },
        description: {
            type: String, required: true
        },
    }
);

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
