export interface GifList {
  [key: string]: GifItem;
}

export interface GifItem {
  url: string;
  id: string;
  title: string;
  isLocked: boolean;
}
