import { createSlice } from "@reduxjs/toolkit";

export interface GifListState {
  gifList: any;
}

const initialState = {
  gifList: [],
} as GifListState;

const gifListSlice = createSlice({
  name: "gifList",
  initialState,
  reducers: {
    toggleLock: (_state, action) => {
      const gifIndex = _state.gifList.findIndex(
        (gif: { url: any }) => gif.url === action.payload
      );
      _state.gifList[gifIndex].isLocked = !_state.gifList[gifIndex].isLocked;
    },
    loadGifs: (_state, action) => {
      _state.gifList = action.payload;
    },
  },
});

export const { toggleLock, loadGifs } = gifListSlice.actions;
export default gifListSlice.reducer;
