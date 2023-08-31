const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    definition: {
        type: String,
        required: true
    },
    number_of_doc: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['transkript', 'card', 'certificate', 'resume']
    },
    language: {
        type: String,
        lowercase: true,
        enum: ["english", 'turkish']
    },
    requestDate: {
        type: Date,
        default: Date.now
    }
})


const Doc = mongoose.model('Doc', docSchema);

module.exports = Doc;