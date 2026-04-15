import { menuData } from "@/lib/menuData"
import VerticalImageBar from "../VeritcalImageBar"
import Menu from "../Menu"


const MenuSection = () => {
  return(
     <main className="w-full min-h-screen flex flex-col  items-start gap-0 cursor-default py-10 pt-0 ">

          <VerticalImageBar
            image="/vib1.jpeg"
            text="Our Menu"
          />
          <Menu data={menuData}/>
        </main>
  )
}
export default MenuSection