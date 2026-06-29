const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    musicName: {
        type: String,
        required: true,
        trim: true
    },

    musicURI: {
        type: String,
        required: true,
        trim: true
    },

    musicThumbnail: {
        type: String,
        required: true
    },

    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'album',
        required: true
    },

    duration: {
        type: Number,
        default: 0
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    timestamps: true
});

const musicModel = mongoose.model('music', musicSchema);

module.exports = musicModel;