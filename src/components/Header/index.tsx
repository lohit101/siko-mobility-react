import React from 'react';
import Image1 from './image 1.png';
import Image2 from './image 2.png';
import Image3 from './image 3.png';

const Header: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 min-h-[80vh] bg-[url('./Section.png')] bg-cover bg-no-repeat">
            <img src={Image1} className='w-20 h-20' />
            <div className="flex flex-row gap-5">
                <img src={Image2} className='w-20 h-20' />
                <h2 className="text-6xl font-bold">Electric Mobility</h2>
                <img src={Image3} className='w-20 h-20' />
            </div>
            <h2 className="text-6xl font-bold">One-Stop-Shop For Professionals</h2>
            <p className="text-2xl my-5">Financing, insurance, maintenance and warranty.</p>
            <button className="bg-blue-500 text-white py-2 px-5 rounded-full">Our Service for all Mobility &#129123;</button>
        </div>
    )
}

export default Header