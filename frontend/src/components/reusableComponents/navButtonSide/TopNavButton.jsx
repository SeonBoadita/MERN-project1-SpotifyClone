import { NavLink } from "react-router-dom"

const TopNavButton = ({ name }) => {
    return (
        <>
            <NavLink to={`/${name.toLowerCase()}`} className={({ isActive }) => `navitem w-auto font-semibold text-[.7rem] px-3 min-h-1 bg-(--green) py-1 rounded-[20px] flex items-center justify-center ${isActive ? 'bg-(--green)' : 'bg-black text-white hover:text-(--green)'}`}>{name}</NavLink>
        </>
    )
}

export default TopNavButton
