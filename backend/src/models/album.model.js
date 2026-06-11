const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    albumName: {
        type: String,
        required: true,
        trim: true
    },

    albumThumbnail:{
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, { timestamps: true });

const albumModel = mongoose.model("album", albumSchema);

module.exports = albumModel;