import SideNavBar from "./SideNavBar"
import SidePlaylist from "./sidePlaylist"

const Right = () => {
    return (
        <>
            <div className="right-nav border-r border-(--transparent-mid-green) w-[14vw] h-full flex flex-col">
                <SideNavBar />
                <SidePlaylist />
            </div>
        </>
    )
}

export default Right
