import React from "react";

const Banner: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="bg-blue-500 w-full mx-5 sm:mx-0 sm:w-4/5 flex flex-row items-center justify-center py-10 my-20 px-10 sm:px-20 gap-3 rounded-3xl bg-[url('./bannerSmallImage.png')] bg-no-repeat bg-cover">
                <div className="w-full sm:w-[70%] flex flex-col gap-5 my-3">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white">Simulate Your Monthly Payment</h2>
                    <p className="text-base font-regular text-white">Siko Mobility offers to simulate your monthly payment based on your contribution and the duration of your credit.</p>
                    <div className="flex flex-row gap-5">
                        <a href="#" className="bg-white text-blue-500 py-2 px-5 rounded-full">Simulate Now</a>
                    </div>
                </div>
                <div className="h-full w-0 sm:w-[30%] my-3"></div>
            </div>
        </div>
    )
}

export default Banner