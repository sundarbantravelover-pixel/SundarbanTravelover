import { mediaSlides } from "@/lib/mediaSlides"
import MediaCarousel from "../MediaCarousel"
import VerticalImageBar from "../VeritcalImageBar"

const GallerySection = () => {
  return(
       <main className="w-full min-h-screen flex flex-col  items-start gap-4 cursor-default py-10 pt-24 ">
  
            <VerticalImageBar
              image="/vib1.jpeg"
              text="Gallery"
            />
            <MediaCarousel slides={mediaSlides}/>
          </main>
    )
}

export default GallerySection