import React from "react";
import BannerSmallGif from './BannerSmallGif.gif'

const Banner: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="bg-blue-500 w-full mx-5 sm:mx-0 sm:w-4/5 flex flex-row items-center justify-center py-10 my-20 px-10 sm:px-20 gap-3 rounded-3xl bg-[url('./bannerSmallImage.png')] bg-no-repeat bg-cover">
                <div className="w-full sm:w-[70%] flex flex-col gap-5 my-3">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white capitalize">Simulez votre mensualité</h2>
                    <p className="text-base font-regular text-white">Siko Mobility vous propose de simuler votre mensualité en fonction de votre apport et de la durée de votre crédit.</p>
                    <div className="flex flex-row gap-5">
                        <a href="#" className="bg-white text-blue-500 py-2 px-5 rounded-full">Simuler maintenant</a>
                    </div>
                </div>
                <div className="flex items-center justify-center h-full w-0 sm:w-[30%] my-3">
                    <img className="w-1/3" src={BannerSmallGif} />
                </div>
            </div>
        </div>
    )
}

export default Banner