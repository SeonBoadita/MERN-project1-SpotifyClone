import bgImage from "../images/bg.png"
import Left from "../components/pageComponents/navSide/Left"
import TopNav from "../components/pageComponents/TopNav"
import AuthorScroll from "../components/pageComponents/AuthorScroll";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="w-full flex border-thin-green rounded-2xl overflow-hidden h-full"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}>
                <Left />
                <div className="right-page flex-1 flex flex-col min-w-0">
                    <div className="top w-full h-[25%] flex justify-between">
                        <TopNav />
                    </div>
                    <div className="bottom text-white w-full flex-1 bg-black p-2 flex flex-col gap-2 min-w-0 min-h-0">
                        <AuthorScroll />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
