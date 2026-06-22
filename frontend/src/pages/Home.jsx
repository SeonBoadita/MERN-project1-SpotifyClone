
// import bgSVG from "./svg/bg.svg"

import Right from "../components/pageComponents/navSide/Right"

const Home = () => {
    return (
        <>
            <div className="container flex border border-(--transparent-mid-green) rounded-2xl overflow-hidden h-full pt-2">
                <Right />
                <div className="left-page flex-1 flex flex-col ">
                    <div className="top min-w-full h-[25%]  flex">
                        <div className="title min-w-[60%] "></div>
                        <div className="title flex-1 "></div>
                        <div className="minidetails"></div>
                    </div>
                    <div className="bottom min-w-full flex-1 bg-red-700 p-2 flex flex-col gap-2">
                        <div className="author min-w-full h-[30%] bg-yellow-300"></div>
                        <div className="songs min-w-full flex-1 bg-yellow-700"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
