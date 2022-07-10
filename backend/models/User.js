import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        email: {type: String, required: true},
        username: {type: String, required: true, unique: true, trim: true},
        password: {type: String, required: true},
        firstName: {type: String, required: true, trim: true},
        lastName: {type: String, required: true, trim: true},
        age: {type: Number, required: true, min: 16},
        description: {type: String, required: true},
        showLocation: {type: Boolean, default: false},
        dayAvailabilities: [Boolean], // array of 7
        tags: [String], // array of 8 max
        
        matches: [{
            matchedWithUsername: String,
            matchStatus: {type: Boolean, default: false} // pending == false, matched == true
        }],
        
        socials: [{
            platform: String,
            username: String
        }], 
        showSocials: {type: Boolean, default: false}
    }
);

export default mongoose.model('User', UserSchema, 'user')
