const mongoose = require('mongoose');

const albumScheme = mongoose.Schema({
    musicName:{
        String,
        require: true
    },
    
}, {})