const ImageKit = require("imagekit");
require('dotenv').config({ path: '../.env' });

const imageKitClient = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY || "dummy_public_key",
    privateKey: process.env.IMAGE_KIT_API_KEY,
    urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT || "https://ik.imagekit.io/dummy_id"
});

const uploadMusic = async (file) => {
    return await imageKitClient.upload({
        file,
        fileName: `music-${Date.now()}.mp3`,
        folder: "/spotify/musics"
    });
};

const uploadMusicThumbnail = async (file) => {
    return await imageKitClient.upload({
        file,
        fileName: `music-thumbnail-${Date.now()}.jpg`,
        folder: "/spotify/music-thumbnail"
    });
};

const uploadAlbumThumbnail = async (file) => {
    return await imageKitClient.upload({
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