import { MediaItemType } from "@/types/MediaGridTypes";

export const mediaSlides: MediaItemType[][] = [
  [
    {
      type: "image",
      src: "/deer.jpeg",
      alt: "Deer",
    },
    {
      type: "image",
      src: "/croc.jpeg",
      alt: "Crocodile",
    },
    {
      type: "image",
      src: "/boat.jpeg",
      alt: "Boat",
    },
  ],
  [
    {
      type: "image",
      src: "/pig.jpeg",
      alt: "Wild pig",
    },
    {
      type: "image",
      src: "/sittingcroc.jpeg",
      alt: "Resting crocodile",
    },
    {
      type: "video",
      src: "/swimingcroc.mp4",
      autoPlay: true,
      loop: true,
      muted: true,
    },
  ],
];