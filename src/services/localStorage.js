export const setGifListToLocalStorage = (gifList) => {
  localStorage.setItem("gifList", JSON.stringify(gifList));
};

export const getGifListFromLocalStorage = () => {
  if (localStorage.gifList) {
    return JSON.parse(localStorage.getItem("gifList"));
  } else return [];
};

export const updateGifInLocalStorage = (gifUrl) => {
  const gifList = getGifListFromLocalStorage();
  const gifIndex = gifList.findIndex((gif) => gif.url === gifUrl);
  gifList[gifIndex].isLocked = !gifList[gifIndex].isLocked;
  setGifListToLocalStorage(gifList);
};
