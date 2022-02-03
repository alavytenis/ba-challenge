import { GifItem, GifItems } from "../interfaces/GifListType";

export const setGifListToLocalStorage = (gifList: GifItems) => {
  localStorage.setItem("gifList", JSON.stringify(gifList));
};

export const getGifListFromLocalStorage = () => {
  if (localStorage.gifList) {
    const gifListLocalStorage: string = localStorage.getItem("gifList") || "";

    return JSON.parse(gifListLocalStorage);
  } else return [];
};

export const updateGifInLocalStorage = (gifUrl: string) => {
  const gifList = getGifListFromLocalStorage();
  const gifIndex = gifList.findIndex((gif: GifItem) => gif.url === gifUrl);
  gifList[gifIndex].isLocked = !gifList[gifIndex].isLocked;
  setGifListToLocalStorage(gifList);
};
