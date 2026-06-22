const ImageKit = require("imagekit");
require('dotenv').config({ path: '../.env' });

const imageKitClient = new ImageKit({
    privateKey: process.env.IMAGE_KIT_API_KEY
});

const uploadMusic = async (file) => {
    return await imageKitClient.files.upload({
        file,
        fileName: `music-${Date.now()}.mp3`,
        folder: "/spotify/musics"
    });
};

const uploadMusicThumbnail = async (file) => {
    return await imageKitClient.files.upload({
        file,
        fileName: `music-thumbnail-${Date.now()}.jpg`,
        folder: "/spotify/music-thumbnail"
    });
};

const uploadAlbumThumbnail = async (file) => {
    return await imageKitClient.files.upload({
        file,
        fileName: `album-thumbnail-${Date.now()}.jpg`,
        folder: "/spotify/album-thumbnail"
    });
};

module.exports = {
    uploadMusic,
    uploadMusicThumbnail,
    uploadAlbumThumbnail
};