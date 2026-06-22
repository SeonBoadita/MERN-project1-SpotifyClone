import PlaylistCard from "./PlaylistCard"
const SidePlaylist = () => {
    return (
        <>
            <div className="playlist text-white flex-1 min-w-full p-4 text-[.9rem] flex flex-col overflow-hidden">
                <div className="title m-w-full px-3 ppercase font-thin">Your Playlist</div>
                <div className="list flex-1 flex flex-col flex-nowrap overflow-y-auto scrollbar-hide gap-1 mt-2">
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                    <PlaylistCard />
                </div>
            </div>
        </>
    )
}

export default SidePlaylist
