// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const CommunitySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    updatedAt: {
        type: Date
    },
    deletedAt: {
        type: Date
    }
    
})

// module.exports = mongoose.model('Community', CommunitySchema)
export const Community = mongoose.model("Community", CommunitySchema)
