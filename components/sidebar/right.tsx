import Breif from "../details/breif"
import Contact from "../details/contact"
import Education from "../details/education"
import Experience from "../details/experience"
import Projects from "../details/projects"
import Footer from "../footer"
import { ScrollArea } from "../ui/scroll-area"

const RightSidebar = () => {
    return (
        <ScrollArea className="w-full z-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-slate-400 leading-8 w-full px-20 py-10">
                <Breif />
                {/* <Experience /> */}
                <Education/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </ScrollArea>
    )
}

export default RightSidebar