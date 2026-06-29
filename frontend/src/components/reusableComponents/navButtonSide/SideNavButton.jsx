import { NavLink } from "react-router-dom"

const SideNavButton = ({ name }) => {
    const getIcon = (name) => {
        switch (name.toLowerCase()) {
            case 'home': return 'fa-solid fa-house';
            case 'about us': return 'fa-solid fa-users';
            case 'contact us': return 'fa-solid fa-envelope';
            default: return 'fa-solid fa-circle';
        }
    };

    return (
        <>
            <NavLink
                to={name.toLowerCase() === 'home' ? '/' : `/${name.toLowerCase().replace(/\s+/g, "")}`}
                className={({ isActive }) =>
                    `flex p-2 rounded-md ${isActive
                        ? "text-(--green) hover:text-(--green) bg-(--transparent-light-green)"
                        : "text-white hover:text-(--green) hover:bg-(--transparent-light-green)"
                    } items-center gap-2 pl-4`
                }
            >
                <i className={`${getIcon(name)} min-w-4 text-center`}></i>
                <div className="nav-btn min-w-full ml-2 whitespace-nowrap">{name}</div>
            </NavLink>
        </>
    )
}

export default SideNavButton
