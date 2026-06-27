import { useRef, useEffect } from "react"
import PlaylistCard from "./PlaylistCard"
import gsap from "gsap"
const SidePlaylist = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleWheelNative = (e) => {
            e.preventDefault();
            if (scrollRef.current) {
                gsap.to(scrollRef.current, {
                    scrollTop: scrollRef.current.scrollTop + e.deltaY / 2.5,
                    duration: 0.5,
                    ease: "power2.out",
                });
            }
        };

        const el = scrollRef.current;
        if (el) {
            el.addEventListener("wheel", handleWheelNative);
        }
        return () => {
            if (el) el.removeEventListener("wheel", handleWheelNative);
        };
    }, []);

    return (
        <>
            <div className="playlist text-white flex-1 min-w-full p-4 text-[.9rem] flex flex-col overflow-hidden">
                <div className="title m-w-full px-3 ppercase font-thin">Your Playlist</div>
                <div ref={scrollRef} className="list flex-1 flex flex-col flex-nowrap overflow-y-auto scrollbar-hide gap-1 mt-2">
                    <PlaylistCard playlistName="My Playlist 1" />
                    <PlaylistCard playlistName="My Playlist 2" />
                    <PlaylistCard playlistName="My Playlist 3" />
                    <PlaylistCard playlistName="My Playlist 4" />
                    <PlaylistCard playlistName="My Playlist 5" />
                    <PlaylistCard playlistName="My Playlist 6" />
                    <PlaylistCard playlistName="My Playlist 7" />
                    <PlaylistCard playlistName="My Playlist 8" />
                    <PlaylistCard playlistName="My Playlist 9" />
                    <PlaylistCard playlistName="My Playlist 10" />
                    <PlaylistCard playlistName="My Playlist 11" />
                    <PlaylistCard playlistName="My Playlist 12" />
                    <PlaylistCard playlistName="My Playlist 13" />
                    <PlaylistCard playlistName="My Playlist 14" />
                    <PlaylistCard playlistName="My Playlist 15" />
                    <PlaylistCard playlistName="My Playlist 16" />
                    <PlaylistCard playlistName="My Playlist 17" />
                    <PlaylistCard playlistName="My Playlist 18" />
                    <PlaylistCard playlistName="My Playlist 19" />
                    <PlaylistCard playlistName="My Playlist 20" />
                    <PlaylistCard playlistName="My Playlist 21" />
                    <PlaylistCard playlistName="My Playlist 22" />
                    <PlaylistCard playlistName="My Playlist 23" />
                    <PlaylistCard playlistName="My Playlist 24" />
                    <PlaylistCard playlistName="My Playlist 25" />
                    <PlaylistCard playlistName="My Playlist 26" />
                    <PlaylistCard playlistName="My Playlist 27" />
                    <PlaylistCard playlistName="My Playlist 28" />
                </div>
            </div>
        </>
    )
}

export default SidePlaylist
