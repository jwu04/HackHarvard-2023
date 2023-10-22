import React from 'react';
import {useRouter} from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const currentPage = router.pathname;

    const handleRedirect = (whereTo) => () => {
        // Perform the navigation using the router's push method
        router.push(whereTo);
    };

    return (
        // TODO: remove colored and coloredChosen
        <nav className="py-5 shadow-sm mb-10">
            <div className="sec-body mt-3 mb-3">
                <div className="flex flex-row ml-auto display-none items-center lg:w-auto text-center">
                    <p className="text-center font-bold"><span className="logo">Rememory</span></p>
                    {currentPage === '/' ?
                        <div
                            className={"ml-auto cursor-pointer nav-font colored coloredChosen text-lg text-white h-full theme-bg rounded-lg hover:opacity-80 transition duration-100 ease-in-out transform px-12 py-2"}
                            draggable="false" onClick={handleRedirect("/quiz")}>
                            <span className={'font-semibold'}><i
                                className="fa-solid fa-plus"></i>&nbsp; Write Memory</span>
                        </div>
                        :
                        <div
                            className={"ml-auto cursor-pointer nav-font colored coloredChosen text-lg text-white h-full theme-bg rounded-lg hover:opacity-80 transition duration-100 ease-in-out transform px-12 py-2"}
                            draggable="false" onClick={handleRedirect("/")}>
                            <span className={'font-semibold'}><i className="fa-solid fa-list"></i>&nbsp; View Memories</span>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
