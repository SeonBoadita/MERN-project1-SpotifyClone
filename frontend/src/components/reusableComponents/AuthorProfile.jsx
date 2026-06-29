import { BadgeCheck } from "lucide-react"
import bgImage from "../../images/bg.png"

const AuthorProfile = () => {
    return (
        <>
            <div className="imageDiv relative w-fit">
                <div className="verified w-5 h-5 rounded-full bottom-1 right-0.5 absolute">
                    <BadgeCheck className="w-5.5 h-5.5 text-black fill-(--darkgreen)" />
                </div>
                <div className="profile bg-black w-20 h-20 flex items-center justify-center overflow-hidden rounded-full">
                    <img src={bgImage} alt="" className="object-cover w-full h-full rounded-full" />
                </div>
            </div>
        </>
    )
}

export default AuthorProfile
