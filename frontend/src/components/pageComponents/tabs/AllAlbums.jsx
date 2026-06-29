import { useRef, useEffect } from "react"
import gsap from "gsap"
import AlbumCard from "../../reusableComponents/AlbumCard"

const AllAlbums = () => {

    const listRef = useRef(null)

    useEffect(() => {
        const el = listRef.current
        if (!el) return

        const onWheel = (e) => {
            e.preventDefault()
            gsap.to(el, {
                scrollTop: el.scrollTop + e.deltaY * 2,
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
                <div className="top h-10 shrink-0">All Albums</div>
                <div className="bottom w-full flex-1 min-h-0 overflow-hidden">
                    <div ref={listRef} className="albumList overflow-y-auto overflow-x-hidden w-full h-full flex flex-wrap content-start p-4 gap-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllAlbums
