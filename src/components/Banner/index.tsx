import React from "react";

import ManImage from './man.png';

const Banner: React.FC = () => {
    return (
        <div className="bg-blue-500 flex flex-row items-center justify-center my-20 px-5 sm:px-20 bg-[url('./earth.png')] bg-no-repeat bg-cover">
            <div className="w-full sm:w-1/2 flex flex-col gap-5 my-20">
                <h2 className="text-5xl font-bold text-white">Become Our Partner</h2>
                <p className="text-2xl font-semibold text-white">Do you have an e-commerce site or a store?</p>
                <p className="text-base font-regular text-white">Join our partners and offer multiple services and benefits to your customers. Increase your turnover with our financing solution.</p>
                <div className="flex flex-col sm:flex-row gap-5">
                    <a href="#" className="bg-white text-blue-500 py-2 px-5 rounded-full text-center">Join as Partner</a>
                    <a href="#" className="text-white py-2 px-5 border-2 border-white rounded-full text-center">Know more</a>
                </div>
            </div>
            <div className="hidden sm:flex w-1/4">
                <img src={ManImage} className="h-full" />
            </div>
        </div>
    )
}

export default Banner