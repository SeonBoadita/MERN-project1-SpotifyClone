const mongoose = require('mongoose');

const saveSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    music: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'music',
        required: true
    }
}, {
    timestamps: true
});

// Prevent same user saving same song multiple times
saveSchema.index(
    { user: 1, music: 1 },
    { unique: true }
);

const savedModel = mongoose.model('saved-song', saveSchema);

module.exports = savedModel;