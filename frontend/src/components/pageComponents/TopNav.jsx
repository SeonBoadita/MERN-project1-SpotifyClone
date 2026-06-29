import TopNavButton from "../reusableComponents/navButtonSide/TopNavButton"

const TopNav = () => {
    return (
        <>
            <div className="title min-w-[60%] flex flex-col">
                <div className="top min-h-[80%] p-7 pt-10 pl-10 flex flex-col gap-3">
                    <div className="title text-4xl font-semibold tracking-tight text-tall">All Songs</div>
                    <div className="sub-heading text-xs font-normal">Explore all your musics in one place</div>
                </div>
                <div className="bottom flex-1 flex flex-nowrap items-center pl-11 gap-5">
                    <TopNavButton name="Songs" />
                    <TopNavButton name="Albums" />
                    <TopNavButton name="Artists" />
                </div>
            </div>
            <div className="sortby flex items-start pt-10 pr-10 gap-4 mt-5">
                <div className="relative">
                    <input type="text" placeholder="Search..." className="bg-[#ffffff13] text-white border border-(--transparent-mid-green) rounded-full px-5 py-2 outline-none focus:border-green-500 w-64 transition-all text-sm font-thin" />
                    <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
            </div>
        </>
    )
}

export default TopNav
