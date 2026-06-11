const { imagekit } = require('@imagekit/nodejs');
require('dotenv').config({ path: '../.env' })

const imageKitClint = new ImageKit({
    privateKey: process.env.IMAGE_KIT_API_KEY
});

const uploadMusic = async (file) => {
    const result = await imageKitClint.files.upload({
        file,
        file: "spotify/musics",
        fileName: 'file-name.jpg' + Date.now(),
    });
    return result;
}

module.exports = { uploadMusic }