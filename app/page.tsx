import Overlay from "@/components/overlay";
import LeftSideBar from "@/components/sidebar/left";
import RightSidebar from "@/components/sidebar/right";

export default function Home() {
  return (
    <div className="w-screen md:h-screen flex relative bg-slate-900 md:flex-row flex-col">
      <LeftSideBar />
      <RightSidebar/>
      <Overlay/>
    </div>
  )
}
