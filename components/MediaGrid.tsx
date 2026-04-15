import { MediaItemType } from "@/types/MediaGridTypes";

type MediaGridProps = {
  items: MediaItemType[];
};

const MediaItem: React.FC<{ item: MediaItemType }> = ({ item }) => {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        className="w-full h-full object-cover"
        controls={item.controls ?? true}
        autoPlay={item.autoPlay ?? false}
        loop={item.loop ?? false}
        muted={item.muted ?? true}
        playsInline
      />
    );
  }

  return (
    <img
      src={item.src}
      alt={item.alt ?? "media"}
      className="w-full h-full object-cover"
    />
  );
};

const MediaGrid: React.FC<MediaGridProps> = ({ items }) => {
  if (!items || items.length < 3) return null;

  return (
    <div className="
      grid gap-2 w-full max-w-4xl mx-auto
      grid-cols-1 
      sm:grid-cols-2 sm:grid-rows-2 sm:aspect-[2/1]
    ">
      
      {/* Left Top */}
      <div className="overflow-hidden h-56 sm:h-auto">
        <MediaItem item={items[0]} />
      </div>

      {/* Right Tall */}
      <div className="overflow-hidden h-56 sm:h-auto sm:row-span-2">
        <MediaItem item={items[1]} />
      </div>

      {/* Left Bottom */}
      <div className="overflow-hidden h-56 sm:h-auto">
        <MediaItem item={items[2]} />
      </div>

    </div>
  );
};

export default MediaGrid;