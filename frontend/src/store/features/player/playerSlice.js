import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",

    initialState: {
        currentSong: null,
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