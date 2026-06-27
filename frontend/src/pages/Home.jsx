
import bgImage from "../images/bg.png"
import Left from "../components/pageComponents/navSide/Left"
import TopNav from "../components/pageComponents/TopNav"
import AuthorScroll from "../components/pageComponents/AuthorScroll";
import img from '../images/image.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex border-thin-green rounded-2xl overflow-hidden h-full"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}>
                <Left />
                <div className="right-page flex-1 flex flex-col min-w-0">
                    <div className="top w-full h-[25%] flex justify-between">
                        <TopNav />
                        <div className="sortby flex items-start pt-10 pr-10 gap-4">
                            <div className="relative">
                                <input type="text" placeholder="Search..." className="bg-[#ffffff13] text-white border border-(--transparent-mid-green) rounded-full px-5 py-2 outline-none focus:border-green-500 w-64 transition-all text-sm font-thin" />
                                <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            </div>
                            <button onClick={() => navigate('/login')} className="bg-(--green) text-black px-6 py-2 rounded-full text-sm font-semibold hover:shadow-[0_0_15px_rgba(187,252,7,0.3)] transition-all flex items-center gap-2">
                                <i className="fa-solid fa-user"></i> Login
                            </button>
                        </div>
                    </div>
                    <div className="bottom text-white w-full flex-1 bg-black p-2 flex flex-col gap-2 min-w-0">
                        <AuthorScroll />
                        <div className="songs min-w-full flex-1 p-2 px-4">
                            <div className="top">All Musics</div>
                            <div className="bottom">
                                <div className="musicList">
                                    <table className="musics min-w-full text-left border-separate border-spacing-y-2 p-1">
                                        <thead>
                                            <tr>
                                                <th className="font-thin text-[13px] px-4 py-2">#</th>
                                                <th className="font-thin text-[13px] px-4 py-2">TITLE</th>
                                                <th className="font-thin text-[13px] px-4 py-2">ARTIST</th>
                                                <th className="font-thin text-[13px] px-4 py-2">ALBUM</th>
                                                <th className="px-4 py-2"><i className="fa-regular font-thin fa-clock"></i></th>
                                                <th className="px-4 py-2"><i className="fa-regular font-thin fa-heart"></i></th>
                                            </tr>
                                        </thead>
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
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
