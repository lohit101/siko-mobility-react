import React from "react";

import ManImage from './man.png';

const Banner: React.FC = () => {
    return (
        <div className="bg-blue-500 flex flex-row items-end justify-center px-5 sm:px-20 bg-[url('./earth.png')] bg-no-repeat bg-cover">
            <div className="w-full sm:w-1/2 flex flex-col gap-5 py-20 self-center">
                <h2 className="text-5xl font-bold text-white capitalize">Devenez notre partenaire</h2>
                <p className="text-2xl font-semibold text-white">Vous possédez un site e-commerce ou une boutique ?</p>
                <p className="text-base font-regular text-white">Rejoignez nos partenaires et offrez de multiples services et avantages à vos clients. Augmentez votre chiffre d'affaires avec notre solution de financement.</p>
                <div className="flex flex-col sm:flex-row gap-5">
                    <a href="#" className="bg-white text-blue-500 py-2 px-5 rounded-full text-center">Rejoignez-nous en tant que partenaire</a>
                    <a href="#" className="text-white py-2 px-5 border-2 border-white rounded-full text-center">Savoir Plus</a>
                </div>
            </div>
            <div className="hidden sm:flex w-[40%]">
                <img src={ManImage} className="h-full" />
            </div>
        </div>
    )
}

export default Banner