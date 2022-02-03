export type GifItems = Array<GifItem>;

export interface GifItem {
  url: string;
  id: string;
  title: string;
  isLocked: boolean;
}
