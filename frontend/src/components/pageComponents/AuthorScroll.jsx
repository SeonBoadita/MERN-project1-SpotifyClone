import gsap from 'gsap';
import Author from '../reusableComponents/navButtonSide/Author'
import { useEffect, useRef } from 'react';

const AuthorScroll = () => {

    const scrollRef = useRef(null);
    const moveLeftRef = useRef(null);
    const moveRightRef = useRef(null);

    useEffect(() => {
        const moveLeft = () => {
            if (scrollRef.current) {
                console.log(scrollRef.current.scrollLeft + 15)
                gsap.to(scrollRef.current, {
                    scrollLeft: "-=200",
                    duration: 0.3,
                    ease: "power2.out"
                })
            }
        }
        const moveRight = () => {
            if (scrollRef.current) {
                console.log(scrollRef.current.scrollLeft + 15)
                gsap.to(scrollRef.current, {
                    scrollLeft: "+=200",
                    duration: 0.3,
                    ease: "power2.out"
                })
            }
        }

        const handleWheel = (e) => {
            if (scrollRef.current) {
                gsap.to(scrollRef.current, {
                    scrollLeft: scrollRef.current.scrollLeft + e.deltaY,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        const scrollEl = scrollRef.current;
        const leftEl = moveLeftRef.current;
        const rightEl = moveRightRef.current;

        if (scrollEl) {
            scrollEl.addEventListener("wheel", handleWheel);
        }
        if (leftEl) {
            leftEl.addEventListener("click", moveLeft);
        }
        if (rightEl) {
            rightEl.addEventListener("click", moveRight);
        }

        return () => {
            if (scrollEl) {
                scrollEl.removeEventListener("wheel", handleWheel);
            }
            if (leftEl) {
                leftEl.removeEventListener("click", moveLeft);
            }
            if (rightEl) {
                rightEl.removeEventListener("click", moveRight);
            }
        }
    }, []);

    return (
        <>
            <div className="author w-full h-[40%] bg-black flex flex-col gap-2 p-4 min-w-0">
                <div className="authCont flex justify-between h-[15%] items-center w-full">
                    <div className="title w-fit font-semiboldbg-black">Artist</div>
                    <div className="right flex gap-4 items-center bg-black">
                        <div
                            ref={moveLeftRef}
                            className="left w-9 h-9 mb-4 mr-2 border border-(--green) rounded-full flex items-center justify-center cursor-pointer hover:bg-(--transparent-mid-green)">
                            <i className="fa-solid fa-chevron-left text-xl font-thin"></i>
                        </div>
                        <div
                            ref={moveRightRef}
                            className="left w-9 h-9 mb-4 mr-2 border border-(--green) rounded-full flex items-center justify-center cursor-pointer hover:bg-(--transparent-mid-green)">
                            <i className="fa-solid fa-chevron-right text-xl font-thin"></i>
                        </div>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="profile flex-1 flex gap-3 bg-black overflow-x-auto overflow-y-hidden scrollbar-hide items-center px-2"
                >
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                </div>
            </div>

        </>
    )
}

export default AuthorScroll
