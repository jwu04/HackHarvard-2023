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
            <div className="w-36 mb-3">
                <div className="flex flex-row ml-auto w-full display-none items-center lg:w-auto text-center">
                    <div
                        className={"cursor-pointer select-none nav-font colored coloredChosen text-lg text-gray-100 w-full h-full"}
                        draggable="false" onClick={handleRedirect("/quiz")}>
                        <span className={'font-semibold'}>Write Memory</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
