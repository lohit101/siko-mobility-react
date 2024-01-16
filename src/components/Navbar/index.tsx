import React from 'react';
import Logo from './logo.png';

const Navbar: React.FC = () => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {        
        if (document.getElementById('navbar-alignment')?.classList.contains('hidden')) {
            document.getElementById('navbar-alignment')?.classList.replace('hidden', 'flex');
        } else {
            document.getElementById('navbar-alignment')?.classList.replace('flex', 'hidden');
        }
    };

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
                <a className="sm:order-1 flex-none text-xl font-semibold" href="#">
                    <img src={Logo} />
                </a>
                <div className="sm:order-3 flex items-center gap-x-2">
                    <button onClick={handleClick} id='toggleBtn' type="button" className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6"/>
                            <line x1="3" x2="21" y1="12" y2="12"/>
                            <line x1="3" x2="21" y1="18" y2="18"/>
                        </svg>
                        <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                        </svg>
                    </button>
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-blue-500 bg-white text-blue-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        Simulation
                    </button>
                </div>
                <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                        <a className="font-medium text-gray-600 hover:text-blue-500" href="#">Espace Marchand</a>
                        <a className="font-medium text-gray-600 hover:text-blue-500" href="#">Nos services</a>
                        <a className="font-medium text-gray-600 hover:text-blue-500" href="#">Contact</a>
                        <a className="font-medium text-gray-600 hover:text-blue-500" href="#">FAQ</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar