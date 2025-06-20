import Breif from "../details/breif"
import Contact from "../details/contact"
import Education from "../details/education"
import Projects from "../details/projects"
import Stats from "../details/stats"
import Footer from "../footer"
import { ScrollArea } from "../ui/scroll-area"

const RightSidebar = () => {
    return (
        <ScrollArea className="w-full z-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-slate-400 leading-8 w-full md:px-20 md:py-10 px-2 py-2">
                <Breif />
                <Education/>
                <Projects/>
                <Stats/>
                <Contact/>
                <Footer/>
            </div>
        </ScrollArea>
    )
}

export default RightSidebar