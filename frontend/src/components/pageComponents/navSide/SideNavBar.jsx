import SideNavButton from "../../reusableComponents/navButtonSide/SideNavButton"
import logo from "../../../svg/logo.svg"
const SideNavBar = () => {
    return (
        <>
            <div className="side-nav h-[35vh] min-w-full flex flex-col gap-2 p-1 border-b border-(--transparent-mid-green)">
                <div className="logo min-h-[20%] min-w-full flex">
                    <div className="left pl-4">
                        <img src={logo} alt="logo.svg" className="logo object-cover w-[10vh] h-auto pl-2 pt-2" />
                    </div>

                    <div className="right flex-1">
                    </div>
                </div>
                <div className="navlinks text-[.8rem] flex-1 flex flex-col gap-2 pl-1 pt-4 pr-2 pb-2">
                    <SideNavButton name="Home" />
                    <SideNavButton name="About us" />
                    <SideNavButton name="Contact us" />
                </div>
            </div>
        </>
    )
}

export default SideNavBar
