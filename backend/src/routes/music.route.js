const express = require('express');
const multer = require('multer');

const verifyUser = require('../middlewares/userverify.middelware');
const validateAuthor = require('../middlewares/music.middleware');
const musicsController = require('../controllers/music.controller');

const route = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
});

route.post(
    '/create-album',
    validateAuthor.validateIfAuthor,
    upload.single('albumThumbnail'),
    musicsController.createAlbum
);

route.post(
    '/create-music',
    validateAuthor.validateIfAuthor,
    upload.fields([
        { name: 'musicURI', maxCount: 1 },
        { name: 'musicThumbnail', maxCount: 1 }
    ]),
    musicsController.createMusic
);

route.delete(
    '/delete-music/:id',
    validateAuthor.validateIfAuthor,
    musicsController.deleteMusic
);

route.get(
    '/musics',
    verifyUser.verifyUserLogin,
    musicsController.getAllMusic
);

route.get(
    '/albums',
    verifyUser.verifyUserLogin,
    musicsController.getAllAlbums
);

route.get(
    '/albums/musics/:albumId',
    verifyUser.verifyUserLogin,
    musicsController.getMusicAlbumSelect
);

module.exports = route;