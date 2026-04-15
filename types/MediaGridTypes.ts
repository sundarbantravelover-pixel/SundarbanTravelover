export type MediaType = "image" | "video";

export type MediaItemType = {
  type: MediaType;
  src: string;
  alt?: string;

  // video-specific
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};
