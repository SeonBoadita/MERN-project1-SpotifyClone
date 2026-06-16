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

route.delete(
    '/delete-album/:albumId',
    validateAuthor.validateIfAuthor,
    musicsController.deleteAlbum
);

route.post(
    '/save',
    verifyUser.verifyUserLogin,
    musicsController.saveMusic
);

route.get(
    '/get-authors-album',
    validateAuthor.validateIfAuthor,
    musicsController.getAlbumsByAuthor
);

route.post(
    '/add-to-history',
    verifyUser.verifyUserLogin,
    musicsController.history
);

route.get(
    '/saved-songs',
    verifyUser.verifyUserLogin,
    musicsController.getSavedSongs
);

route.delete(
    '/delete-saved-songs/:songId',
    verifyUser.verifyUserLogin,
    musicsController.deleteSavedSongs
);

route.get(
    '/saved-history',
    verifyUser.verifyUserLogin,
    musicsController.getSavedHistory
);

route.delete(
    '/delete-saved-history/:musicId',
    verifyUser.verifyUserLogin,
    musicsController.deleteSavedHistory
);

route.get(
    '/search',
    verifyUser.verifyUserLogin,
    musicsController.searchMusic
);

module.exports = route;