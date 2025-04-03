const mongoose = require('mongoose');

const familyMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    deathDate: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    photo: {
        type: String
    },
    bio: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    occupation: {
        type: String,
        default: ''
    },
    relationships: [{
        type: {
            type: String,
            enum: ['parent', 'child', 'spouse', 'sibling'],
            required: true
        },
        memberId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FamilyMember'
        }
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationSource: {
        type: String,
        enum: ['user', 'researcher', 'archive'],
        default: 'user'
    }
}, {
    timestamps: true
});

// Update the updatedAt timestamp before saving
familyMemberSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('FamilyMember', familyMemberSchema); 