import { createSlice } from "@reduxjs/toolkit";

const savedSong = (() => {
    try {
        const raw = localStorage.getItem("currentSong");
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
})();

export const playerSlice = createSlice({
    name: "player",

    initialState: {
        currentSong: savedSong,
        isPlaying: false,
        volume: 1,
        currentTime: 0
    },

    reducers: {
        // prevousSong: (state, action) => {
        // },
        // nextSong: (state, action) => {
        // },
        currentSongPlaying: (state, action) => {
            state.currentSong = action.payload;
            try {
                localStorage.setItem("currentSong", JSON.stringify(action.payload));
            } catch (err) {
                console.log(err)
            }
        },
        isSongPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        currentVolume: (state, action) => {
            state.volume = action.payload;
        },
        currentSongTime: (state, action) => {
            state.currentTime = action.payload;
        },
    }
});

export const {
    currentSongPlaying,
    isSongPlaying,
    currentVolume,
    currentSongTime,
    // prevousSong, 
    // nextSong 
} = playerSlice.actions;
export default playerSlice.reducer;