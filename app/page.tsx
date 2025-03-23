import Overlay from "@/components/overlay";
import LeftSideBar from "@/components/sidebar/left";
import RightSidebar from "@/components/sidebar/right";

export default function Home() {
  return (
    <div className="w-screen h-screen flex relative">
      <LeftSideBar />
      <RightSidebar/>
      {/* <Overlay/> */}
    </div>
  )
}
