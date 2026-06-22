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
                    <TopNavButton name="All" />
                    <TopNavButton name="Songs" />
                    <TopNavButton name="Album" />
                    <TopNavButton name="Artist" />
                </div>
            </div>
        </>
    )
}

export default TopNav
