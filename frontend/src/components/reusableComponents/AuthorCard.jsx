import { useNavigate } from "react-router-dom"
import AuthorProfile from "./AuthorProfile"

const AuthorCard = () => {
    const navigate = useNavigate()

    return (
        <>
            {/* AUTHOR ID NEEDS TO BE ADDED */}
            <tbody onClick={() => navigate('/')} className="hover:bg-(--transparent-light-green) bg-[#ffffff13] h-30 cursor-pointer">
                <tr>
                    <td className="px-4 py-2 rounded-l-[5px] border-y border-l border-(--transparent-mid-green)">1</td>
                    <td className="px-4 py-2 border-y border-(--transparent-mid-green)">
                        <AuthorProfile />
                    </td>
                    <td className="text-[12px] px-4 border-y border-(--transparent-mid-green)">Artist Name</td>
                    <td className="text-[12px] font-thin px-4 border-y border-(--transparent-mid-green)">22</td>
                    <td className="text-[12px] font-thin px-4 py-2 rounded-r-[5px] border-y border-r border-(--transparent-mid-green)">11,245</td>
                </tr>
            </tbody>
        </>
    )
}

export default AuthorCard
