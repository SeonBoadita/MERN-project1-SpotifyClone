import image from '../../../images/image.png'

const PlaylistCard = ({ playlistName }) => {
    return (
        <>
            <div className="list-card max-w-full flex hover:bg-(--transparent-light-green) rounded-md px-2 py-2 cursor-pointer">
                <div className="left w-[20%] h-[20%]">
                    <img src={image} alt="" className="image border border-(--transparent-mid-green) object-cover min-w-full min-h-full rounded-xs" />
                </div>
                <div className="right flex-1 pl-4 flex flex-col">
                    <div className="name text-[.7rem] font-medium">{playlistName}</div>
                    <div className="time text-[.6rem] font-thin">1:20</div>
                </div>
            </div>
        </>
    )
}

export default PlaylistCard
