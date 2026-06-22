
import bgImage from "../images/bg.png"
import Left from "../components/pageComponents/navSide/Left"
import TopNav from "../components/pageComponents/TopNav"
import { useRef } from "react";
import Author from "../components/reusableComponents/navButtonSide/Author";

const Home = () => {
    const scrollRef = useRef(null);

    const handleWheel = (e) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <>
            <div
                className="w-full flex border-thin-green rounded-2xl overflow-hidden h-full"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}>
                <Left />
                <div className="right-page flex-1 flex flex-col min-w-0">
                    <div className="top w-full h-[25%] flex">
                        <TopNav />
                        <div className="sortby"></div>
                    </div>
                    <div className="bottom text-white w-full flex-1 bg-black p-2 flex flex-col gap-2 min-w-0">
                        <div className="author w-full h-[40%] bg-black flex flex-col gap-2 p-4 min-w-0">
                            <div className="title w-fit font-semibold h-[15%] bg-black">Authors</div>

                            <div
                                ref={scrollRef}
                                onWheel={handleWheel}
                                className="profile flex-1 flex gap-3 bg-black overflow-x-auto overflow-y-hidden scrollbar-hide items-center px-2"
                            >
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                                <Author />
                            </div>


                        </div>
                        <div className="songs min-w-full flex-1 bg-yellow-700"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
