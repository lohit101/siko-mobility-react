import React from 'react';
import Logo from './logo.png';

const Navbar: React.FC = () => {
    return (
        // <div className="bg-white w-full flex flex-row items-center justify-between py-5 px-10 sticky top-0 z-10 shadow-md">
        //     <div className="navLeft">
        //         <img src={Logo} alt="Siko Mobility" />
        //     </div>
        //     <div className="navMiddle">
        //         <ul className='flex flex-row gap-5'>
        //             <li>Espace Marchand</li>
        //             <li>Nos services</li>
        //             <li>Contact</li>
        //             <li>FAQ</li>
        //         </ul>
        //     </div>
        //     <div className="navRight">
        //         <button className='text-blue-500 border-2 border-blue-500 rounded-full py-1 px-5 transition-all hover:bg-blue-500 hover:text-white'>Simulation</button>
        //     </div>
        // </div>

        <nav className="bg-white shadow-md py-3">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="hidden sm:flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src={Logo} alt="Your Company" />
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium transition-all">Team</a>
                            <a href="#" className="text-gray-500 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium transition-all">Projects</a>
                            <a href="#" className="text-gray-500 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium transition-all">Calendar</a>
                        </div>
                    </div>
                </div>
                <div className="flex sm:hidden flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src={Logo} alt="Your Company" />
                </div>
                <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="relative ml-3">
                        <button className='text-blue-500 border-2 border-blue-500 rounded-full py-1 px-5 transition-all hover:bg-blue-500 hover:text-white'>Simulation</button>
                    </div>
                </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pb-3 pt-2">
                <a href="#" className="text-gray-500 hover:bg-blue-500 hover:text-white block rounded-md px-3 py-1 text-sm">Team</a>
                <a href="#" className="text-gray-500 hover:bg-blue-500 hover:text-white block rounded-md px-3 py-1 text-sm">Projects</a>
                <a href="#" className="text-gray-500 hover:bg-blue-500 hover:text-white block rounded-md px-3 py-1 text-sm">Calendar</a>
                </div>
            </div>
            </nav>
    )
}

export default Navbar