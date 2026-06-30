import { configureStore } from '@reduxjs/toolkit';
import currentPlayerSlice from './features/player/playerSlice';

const store = configureStore({
  reducer: {
    player: currentPlayerSlice
  },
});

export default store;