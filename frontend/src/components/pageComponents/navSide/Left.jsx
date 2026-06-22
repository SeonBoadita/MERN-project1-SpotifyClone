import SideNavBar from "./SideNavBar"
import SidePlaylist from "./sidePlaylist"

const Left = () => {
    return (
        <>
            <div className="left-nav bg-black w-[14vw] border-r border-(--transparent-mid-green) h-full flex flex-col">
                <SideNavBar />
                <SidePlaylist />
            </div>
        </>
    )
}

export default Left
