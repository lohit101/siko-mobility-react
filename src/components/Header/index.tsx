import React from 'react';
import Image1 from './image 1.png';
import Image2 from './image 2.png';
import Image3 from './image 3.png';

const Header: React.FC = () => {
    return (
        <div className="flex flex-col items-start sm:items-center justify-center px-5 gap-2 min-h-[80vh] sm:min-h-[80vh] bg-[url('./Section.png')] bg-cover bg-no-repeat bg-center">
            <img src={Image1} className='hidden sm:block w-20 h-20' />
            <div className="flex flex-row gap-5 w-full sm:w-max">
                <img src={Image2} className='hidden sm:block w-20 h-20' />
                <h2 className="w-full text-4xl sm:text-6xl font-bold capitalize text-center">Mobilité électrique</h2>
                <img src={Image3} className='hidden sm:block w-20 h-20' />
            </div>
            <h2 className="w-full text-4xl sm:text-6xl font-bold capitalize text-center">guichet unique pour les professionnels</h2>
            <p className="text-2xl my-5 text-center">Financement, Assurance, Entretien Et Garantie.</p>
            <a href='#services' className="bg-blue-500 text-white py-2 px-5 rounded-full self-center">Notre Service Pour Toutes Les Mobilités &#129123;</a>
        </div>
    )
}

export default Header