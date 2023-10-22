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
        <nav className="sec-body">
            <div className="mb-3">
                <div className="flex flex-row ml-auto display-none items-center lg:w-auto text-center w-32">
                    <div
                        className={"select-none nav-font colored coloredChosen text-lg text-white h-full theme-bg rounded-md px-16 py-2"}
                        draggable="false" onClick={handleRedirect("/quiz")}>
                        <span className={'font-semibold'}>Write Memory</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
