const uploadFiles = require('../services/storage.service');

const musicModel = require('../models/music.model');
const albumModel = require('../models/album.model');
const savedModel = require('../models/saved.model');
const historyModel = require('../models/history.model');

const createAlbum = async (req, res) => {
    try {
        const { albumName } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Album thumbnail is required'
            });
        }
        const base64File =
            `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;

        const albumThumbnailUpload =
            await uploadFiles.uploadAlbumThumbnail(
                base64File
            );
        const addAlbum = await albumModel.create({
            albumName,
            albumThumbnail: albumThumbnailUpload.url,
            author: req.user._id
        });

        return res.status(201).json({
            success: true,
            album: addAlbum
        });

    } catch (error) {
        console.log(
            'ERROR || MUSIC CONTROLLER || CREATE ALBUM ||',
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createMusic = async (req, res) => {
    try {
        const { musicName, albumId } = req.body;

        const musicFile = req.files?.musicURI?.[0];
        const thumbnailFile = req.files?.musicThumbnail?.[0];
        // console.log(req.files);
        // console.log(req.body);
        if (!musicFile || !thumbnailFile) {
            return res.status(400).json({
                success: false,
                message: 'Music file and thumbnail are required'
            });
        }

        const musicUpload =
            await uploadFiles.uploadMusic(
                musicFile.buffer.toString('base64')
            );
        // console.log("musicUpload:", musicUpload);

        const thumbnailUpload =
            await uploadFiles.uploadMusicThumbnail(
                thumbnailFile.buffer.toString('base64')
            );
        // console.log("thumbnailUpload:", thumbnailUpload);
        // console.log("Thumbnail size:", thumbnailFile.size);
        const addMusic = await musicModel.create({
            musicName,
            musicURI: musicUpload.url,
            musicThumbnail: thumbnailUpload.url,
            album: albumId,
            author: req.user._id
        });

        return res.status(201).json({
            success: true,
            music: addMusic
        });

    } catch (error) {
        console.log(
            'ERROR || MUSIC CONTROLLER || UPLOAD MUSIC ||',
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteMusic = async (req, res) => {
    try {
        const musicId = req.params.id;

        const music = await musicModel.findById(musicId);

        if (!music) {
            return res.status(404).json({
                success: false,
                message: 'Music not found'
            });
        }

        await musicModel.findByIdAndDelete(musicId);

        return res.status(200).json({
            success: true,
            message: 'Music deleted successfully'
        });

    } catch (error) {
        console.log(
            'ERROR || MUSIC CONTROLLER || DELETE MUSIC ||',
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAllMusic = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const musics = await musicModel
            .find()
            .skip((page - 1) * limit)
            .limit(limit);

        if (musics.length === 0) {
            return res.status(200).json({
                status: "success",
                message: "No musics available",
                musics: []
            });
        }

        return res.status(200).json({
            status: "success",
            musics
        });
    } catch (error) {
        console.log(
            'ERROR || MUSIC CONTROLLER || GET ALL MUSICS ||',
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

};

const getAllAlbums = async (req, res) => {
    try {
        const limit = Number(req.query.limit) || 10;
        const album = await albumModel
            .find()
            .limit(limit);

        if (album.length === 0) return res.status(401).json({
            status: "faliur",
            message: "album not found",
            album: []
        });

        res.status(200).json({
            status: "success",
            message: {
                album,
            }
        })
    } catch (error) {
        console.log(
            'ERROR || MUSIC CONTROLLER || GET ALL ALBUM ||',
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

};

const getMusicAlbumSelect = async (req, res) => {
    try {
        const albumId = req.params.albumId;

        const musics = await musicModel.find({
            album: albumId
        });

        if (musics.length === 0) return res.status(200).json({
            status: "false",
            message: "album is empty",
            album: []
        });

        return res.status(200).json({
            status: "success",
            musics
        })
    } catch (error) {
        console.log(
            'ERROR || MUSIC CONTROLLER || GET MUSIC ALBUM SELECT ||',
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

};

const deleteAlbum = async (req, res) => {
    try {
        const albumId = req.params.albumId;

        const findAlbum = await albumModel.findById(albumId);

        if (!findAlbum) return res.status(401).json({
            status: false,
            message: "no album exists with this id"
        });

        const deleteAlbum = await albumModel.findByIdAndDelete(albumId);

        return res.status(200).json({
            status: "success",
            message: "album deleted successfully"
        })
    } catch (error) {
        console.log(
            'ERROR || MUSIC CONTROLLER || DELETE ALBUM ||',
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

};

const saveMusic = async (req, res) => {
    try {
        const { musicId } = req.body;

        if (!musicId) return res.status(401).json({
            status: false,
            message: "Couldnt fetch music data. "
        });

        const saveMusic = await savedModel.create({
            user: req.user._id,
            music: musicId
        });

        if (!saveMusic) return res.json(400).json({
            status: false,
            message: "music couldnt be saved"
        })
        return res.status(200).json({
            status: "success",
            message: musicId + " was saved successfully"
        })
    } catch (error) {
        console.log("ERROR || SAVE SONG || ", error);

        if (error.code === 11000) {
            return res.status(409).json({
                status: false,
                message: "Song already saved"
            });
        }

        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const getAlbumsByAuthor = async (req, res) => {
    try {
        const album = await albumModel.find({
            author: req.user._id
        });

        if (!album) return res.status(401).json({
            status: false,
            message: "Album doesnot exist"
        });

        return res.status(200).json({
            status: "success",
            message: album
        });

    } catch (error) {
        console.error("ERROR || GET ALBUM BY AUTHOR || ", error);
    }
};

const history = async (req, res) => {

    try {
        const { musicId } = req.body;

        const saveHistory = await historyModel.create({
            user: req.user._id,
            music: musicId,
        });

        if (!saveHistory) return res.status(401).json({
            status: false,
            message: "history isnt saved"
        });

        return res.status(200).json({
            status: "success",
            message: saveHistory
        });

    } catch (error) {
        console.error("ERROR || HOSTORY || ", error);
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const getSavedSongs = async (req, res) => {
    try {
        const savedSongs = await savedModel
            .find({
                user: req.user._id
            })
            .populate('music');

        if (savedSongs.length === 0) return res.status(400).json({
            status: false,
            message: "Songs empty"
        });

        return res.status(200).json({
            status: "success",
            data: savedSongs
        });

    } catch (error) {
        console.error("ERROR || GET SAVED SONGS || ", error);
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const deleteSavedSongs = async (req, res) => {
    try {
        const { songId } = req.params;

        const deletedSong = await savedModel.findOneAndDelete({
            user: req.user._id,
            music: songId
        });

        if (!deletedSong) {
            return res.status(404).json({
                status: false,
                message: "Song not found in saved songs"
            });
        }

        return res.status(200).json({
            status: true,
            message: `Song deleted successfully: ${songId}`
        });

    } catch (error) {
        console.error("ERROR || DELETE SAVED SONGS || ", error);

        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const getSavedHistory = async (req, res) => {
    try {
        const savedHistory = await historyModel
            .find({
                user: req.user._id
            })
            .populate('music');

        if (savedHistory.length === 0) return res.status(400).json({
            status: false,
            message: "history empty"
        });

        return res.status(200).json({
            status: "success",
            data: savedHistory
        });

    } catch (error) {
        console.error("ERROR || GET SAVED HISTORY || ", error);
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const deleteSavedHistory = async (req, res) => {
    try {
        const { musicId } = req.params;

        const deleteHistory = await historyModel.findOneAndDelete({
            user: req.user._id,
            music: musicId
        });

        if (!deleteHistory) {
            return res.status(404).json({
                status: false,
                message: "history not found in saved history"
            });
        }

        return res.status(200).json({
            status: true,
            message: `history deleted successfully: ${musicId}`
        });

    } catch (error) {
        console.error("ERROR || DELETE SAVED HISTORY || ", error);

        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const searchMusic = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q) {
            return res.status(400).json({
                status: false,
                message: "Search query is required"
            });
        }

        const musics = await musicModel.find({
            musicName: {
                $regex: q, // Completes for half typed title
                $options: 'i' // Ignore uppercase/lowercase.
            }
        });

        return res.status(200).json({
            status: true,
            data: musics
        });

    } catch (error) {
        console.error("ERROR || SEARCH MUSIC ||", error);

        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};


module.exports = {
    createAlbum,
    createMusic,
    deleteMusic,
    getAllMusic,
    getAllAlbums,
    getMusicAlbumSelect,
    deleteAlbum,
    saveMusic,
    getAlbumsByAuthor,
    history,
    getSavedSongs,
    deleteSavedSongs,
    getSavedHistory,
    deleteSavedHistory,
    searchMusic
};