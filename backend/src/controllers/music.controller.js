const uploadFiles = require('../services/storage.service');

const musicModel = require('../models/music.model');
const albumModel = require('../models/album.model');

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
        console.log(req.files);
        console.log(req.body);
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
        console.log("musicUpload:", musicUpload);

        const thumbnailUpload =
            await uploadFiles.uploadMusicThumbnail(
                thumbnailFile.buffer.toString('base64')
            );
        console.log("thumbnailUpload:", thumbnailUpload);
        console.log("Thumbnail size:", thumbnailFile.size);
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

}

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

}

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

}

// const deleteAlbum 

// const saveMusic

// const getAlbumsByAuthor

module.exports = {
    createAlbum,
    createMusic,
    deleteMusic,
    getAllMusic,
    getAllAlbums,
    getMusicAlbumSelect
};