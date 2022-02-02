export const setGifListToLocalStorage = (gifList: any) => {
  localStorage.setItem("gifList", JSON.stringify(gifList));
};

export const getGifListFromLocalStorage = () => {
  if (localStorage.gifList) {
    const gifListLocalStorage: any | undefined =
      localStorage.getItem("gifList");
    return JSON.parse(gifListLocalStorage);
  } else return [];
};

export const updateGifInLocalStorage = (gifUrl: any) => {
  const gifList = getGifListFromLocalStorage();
  const gifIndex = gifList.findIndex((gif: any) => gif.url === gifUrl);
  gifList[gifIndex].isLocked = !gifList[gifIndex].isLocked;
  setGifListToLocalStorage(gifList);
};
