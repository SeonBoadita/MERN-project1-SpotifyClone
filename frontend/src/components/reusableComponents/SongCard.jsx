import { useNavigate } from "react-router-dom"
const SongCard = ({ song, index }) => {

    const navigate = useNavigate()

    // Fallback image in case the music doesn't have a thumbnail
    const thumbnail = song?.musicThumbnail || "https://placehold.co/100x100?text=No+Image"
    const name = song?.musicName || "Unknown Song"
    const uri = song?.musicURI || ""

    // Format duration from seconds to MM:SS
    const formatDuration = (seconds) => {
        if (!seconds) return "--:--";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const displayDuration = formatDuration(song?.duration);

    return (
        <>
            {/* 
                Here is where the music URL can be used! 
                When you navigate to /play, you can pass the URL via state, 
                so the playback page knows which song to play.
            */}
            <tbody onClick={() => navigate('/play', { state: { musicURI: uri, musicName: name, musicThumbnail: thumbnail } })} className="hover:bg-(--transparent-light-green) bg-[#ffffff13] h-10 cursor-pointer">
                <tr>
                    <td className="px-4 py-2 rounded-l-[5px] border-y border-l border-(--transparent-mid-green)">{index || 1}</td>
                    <td className="px-4 py-2 border-y border-(--transparent-mid-green)">
                        <div className="flex gap-2 items-center">
                            <img src={thumbnail} alt="thumbnail" className="image w-10 h-10 rounded-[5px] object-cover" />
                            <div className="titleSection flex flex-col gap-1">
                                <div className="songName text-[14px]">{name}</div>
                                <div className="totalTime text-[13px] font-thin">{displayDuration}</div>
                            </div>
                        </div>
                    </td>
                    <td className="text-[12px] px-4 py-2 border-y border-(--transparent-mid-green)">{song.author.username}</td>
                    <td className="text-[12px] px-4 py-2 border-y border-(--transparent-mid-green)">{song.album.albumName}</td>
                    <td className="text-[12px] font-thin px-4 py-2 border-y border-(--transparent-mid-green)">{displayDuration}</td>
                    <td className="px-4 py-2 rounded-r-[5px] border-y border-r border-(--transparent-mid-green)"><i className="fa-regular fa-heart cursor-pointer hover:text-green-500"></i></td>
                </tr>
            </tbody>
        </>
    )
}

export default SongCard
