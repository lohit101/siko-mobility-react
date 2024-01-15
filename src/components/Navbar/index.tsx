import React from 'react';
import Logo from './logo.png';

const Navbar: React.FC = () => {
    return (
        <div className="bg-white w-full flex flex-row items-center justify-between py-5 px-10 sticky top-0 z-10 shadow-md">
            <div className="navLeft">
                <img src={Logo} alt="Siko Mobility" />
            </div>
            <div className="navMiddle">
                <ul className='flex flex-row gap-5'>
                    <li>Espace Marchand</li>
                    <li>Nos services</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="navRight">
                <button className='text-blue-500 border-2 border-blue-500 rounded-full py-1 px-5 transition-all hover:bg-blue-500 hover:text-white'>Simulation</button>
            </div>
        </div>
    )
}

export default Navbar