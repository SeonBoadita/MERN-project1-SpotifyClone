import { Link } from "react-router-dom"
import AuthorProfile from "../AuthorProfile"

const Author = () => {
    return (
        <>
            <Link to="/" className="card shrink-0 bg-black flex items-center justify-center flex-col w-36 h-[90%] rounded-lg">
                <AuthorProfile />
                <div className="name bg-black tracking-[.1rem] text-[.9rem] mt-2">Hello 1</div>
                <div className="songs-count bg-black text-[.6rem] font-thin mt-1">5 songs</div>
            </Link>
        </>
    )
}

export default Author
