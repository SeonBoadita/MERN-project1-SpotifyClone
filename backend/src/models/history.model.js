const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    music: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'music',
        required: true
    },

    playedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const historyModel = mongoose.model('history', historySchema);

module.exports = historyModel;
