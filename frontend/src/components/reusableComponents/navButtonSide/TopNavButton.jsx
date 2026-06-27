import gsap from "gsap";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom"

const TopNavButton = ({ name }) => {

    const aniRef = useRef();
    const navRef = useRef();
    const [isDisabled, setIsDisabled] = useState(false);

    const clickedButton = (e) => {
        if (isDisabled) {
            e.preventDefault();
            return;
        }
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 1000);

        if (aniRef.current) {
            gsap.fromTo(aniRef.current,
                { width: 0, height: 0, opacity: 1 },
                {
                    width: "150%",
                    height: "150%",
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(aniRef.current, { opacity: 0, duration: 0.5 });
                    }
                }
            )
        }
    }
    return (
        <>
            <NavLink onClick={clickedButton} to={`/${name.toLowerCase()}`} ref={navRef} className={({ isActive }) => `navitem w-auto relative overflow-hidden font-semibold text-[.7rem] px-3 min-h-1 py-1 rounded-[20px] flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-(--green) text-black delay-75' : 'bg-black text-white hover:text-(--green)'} ${isDisabled ? 'pointer-events-none opacity-80' : ''}`}>
                <div ref={aniRef} className="ani rounded-full w-0 h-0 bg-(--green) absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                <span className="relative z-10">{name}</span>
            </NavLink>
        </>
    )
}

export default TopNavButton
