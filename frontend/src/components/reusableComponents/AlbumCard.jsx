import { useNavigate } from "react-router-dom"
import bgImage from "../../images/bg.png"

const AlbumCard = ({ id = 1, name = "Album Name", author = "Authors name", songs = 222 }) => {
    const navigate = useNavigate()

    return (
        <>
            {/* Navigating dynamically to an album page based on its ID */}
            <div onClick={() => { navigate(`/album/${id}`) }} className="cardCont group relative overflow-hidden h-50 w-45 rounded-[10px] cursor-pointer">

                {/* BG image – grayscale by default, color on hover */}
                <div className="absolute inset-0 w-full h-full transition-all duration-500 grayscale group-hover:grayscale-0"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>

                {/* Gradient overlay – black bottom → transparent top, visible on hover */}
                <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Text content */}
                <div className="relative z-20 w-full h-full p-3 pb-5 flex flex-col justify-end" style={{ WebkitTextStroke: "0.2px black" }}>
                    <div className="text-white text-2xl font-bold truncate">{name}</div>
                    <div className="flex justify-between items-end mt-0.5">
                        <div className="text-gray-100 text-xs font-medium truncate pr-2">{author}</div>
                        <div className="text-gray-200 text-[11px] font-light">{songs} songs</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlbumCard
