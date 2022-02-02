import { createSlice } from "@reduxjs/toolkit";
import { GifItems } from "../../interfaces/GifListType";

export interface GifListState {
  gifList: GifItems;
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
        (gif) => gif.url === action.payload
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
