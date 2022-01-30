import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gifList: [],
};

const lockedGifListSlice = createSlice({
  name: "gifList",
  initialState,
  reducers: {
    toggleLock: (_state, action) => {
      const gifIndex = _state.gifList.findIndex(
        (gif) => gif.url === action.payload
      );
      _state.gifList[gifIndex].isLocked = !_state.gifList[gifIndex].isLocked;
    },
    loadGifs: (_state, action) => {
      _state.gifList = action.payload;
    },
  },
});

export const { toggleLock, loadGifs } = lockedGifListSlice.actions;
export default lockedGifListSlice.reducer;
