import { useRef, useEffect } from "react"
import gsap from "gsap"
import SongCard from "../../reusableComponents/SongCard"
import useMusic from '../../../context/useMusic.js'

const AllSongs = () => {
    const { songs } = useMusic()
    const listRef = useRef(null)

    useEffect(() => {
        const el = listRef.current
        if (!el) return

        const onWheel = (e) => {
            e.preventDefault()
            gsap.to(el, {
                scrollTop: el.scrollTop + e.deltaY * 0.5,
                duration: 0.5,
                ease: "power2.out",
                overwrite: "auto",
            })
        }

        el.addEventListener("wheel", onWheel, { passive: false })
        return () => el.removeEventListener("wheel", onWheel)
    }, [])


    return (
        <>
            <div className="songs min-w-full flex-1 p-2 px-4 flex flex-col min-h-0 overflow-hidden">
                <div className="top shrink-0 mb-2">All Musics</div>
                <div ref={listRef} className="bottom flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    <div className="musicList w-full">
                        <table className="musics min-w-full text-left border-separate border-spacing-y-2 p-1">
                            <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
                                <tr>
                                    <th className="font-thin text-[13px] px-4 py-2">#</th>
                                    <th className="font-thin text-[13px] px-4 py-2">TITLE</th>
                                    <th className="font-thin text-[13px] px-4 py-2">ARTIST</th>
                                    <th className="font-thin text-[13px] px-4 py-2">ALBUM</th>
                                    <th className="px-4 py-2"><i className="fa-regular font-thin fa-clock"></i></th>
                                    <th className="px-4 py-2"><i className="fa-regular font-thin fa-heart"></i></th>
                                </tr>
                            </thead>

                            {songs.length > 0 ? (
                                songs.map((song, index) => (
                                    <SongCard key={song._id} song={song} index={index + 1} />
                                ))
                            ) : (
                                <tbody>
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 text-gray-500">No songs found or not logged in</td>
                                    </tr>
                                </tbody>
                            )}

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllSongs
