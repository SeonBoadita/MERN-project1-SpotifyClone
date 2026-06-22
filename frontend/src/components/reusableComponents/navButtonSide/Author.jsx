import { BadgeCheck } from "lucide-react"
import { Link } from "react-router-dom"
import bgImage from "../../../images/bg.png"

const Author = () => {
    return (
        <>
            <Link to="/" className="card shrink-0 bg-black flex items-center justify-center flex-col w-36 h-[90%] rounded-lg">
                <div className="imageDiv relative">
                    <div className="verified w-5 h-5 rounded-full bottom-1 right-0.5 absolute">
                        <BadgeCheck className="w-5.5 h-5.5 text-black fill-(--darkgreen)" />
                    </div>
                    <div className="profile bg-black w-20 h-20 flex items-center justify-center overflow-hidden rounded-full">
                        <img src={bgImage} alt="" className="object-cover w-full h-full rounded-full" />
                    </div>
                </div>
                <div className="name bg-black tracking-[.1rem] text-[.9rem] mt-2">Hello 1</div>
                <div className="songs-count bg-black text-[.6rem] font-thin mt-1">5 songs</div>
            </Link>
        </>
    )
}

export default Author
