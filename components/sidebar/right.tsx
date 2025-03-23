import Breif from "../details/breif"
import Experience from "../details/experience"
import Projects from "../details/projects"
import { ScrollArea } from "../ui/scroll-area"

const RightSidebar = () => {
    return (
        <ScrollArea className="w-full z-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-slate-400 leading-8 w-full px-20 py-10">
                <Breif />
                <Experience />
                <Projects/>
            </div>
        </ScrollArea>
    )
}

export default RightSidebar