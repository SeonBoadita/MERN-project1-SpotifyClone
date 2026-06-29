import { useNavigate } from "react-router-dom"
import img from '../../images/image.png'
const SongCard = () => {

    const navigate = useNavigate()
    return (
        <>
            <tbody onClick={() => navigate('/play')} className="hover:bg-(--transparent-light-green) bg-[#ffffff13] h-10 cursor-pointer">
                <tr>
                    <td className="px-4 py-2 rounded-l-[5px] border-y border-l border-(--transparent-mid-green)">1</td>
                    <td className="px-4 py-2 border-y border-(--transparent-mid-green)">
                        <div className="flex gap-2 items-center">
                            <img src={img} alt="" className="image w-10 h-10 rounded-[5px]" />
                            <div className="titleSection flex flex-col gap-1">
                                <div className="songName text-[14px]">Song Name</div>
                                <div className="totalTime text-[13px] font-thin">2:29</div>
                            </div>
                        </div>
                    </td>
                    <td className="text-[12px] px-4 py-2 border-y border-(--transparent-mid-green)">Artist Name</td>
                    <td className="text-[12px] px-4 py-2 border-y border-(--transparent-mid-green)">Album Name</td>
                    <td className="text-[12px] font-thin px-4 py-2 border-y border-(--transparent-mid-green)">3:45</td>
                    <td className="px-4 py-2 rounded-r-[5px] border-y border-r border-(--transparent-mid-green)"><i className="fa-regular fa-heart cursor-pointer hover:text-green-500"></i></td>
                </tr>
            </tbody>
        </>
    )
}

export default SongCard
