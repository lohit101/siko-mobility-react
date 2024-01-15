import React from "react";

interface Props {
    heading: string;
    subheading: string;
    image: string;
}

const Service: React.FC<Props> = ({heading, subheading, image}) => {
    return (
        <div className="w-full flex flex-col mx-0 my-5 sm:m-5 gap-1">
            <img src={image} className="w-full rounded-lg"></img>
            <p className="font-semibold text-xl">{heading}</p>
            <p className="text-gray-500">{subheading}</p>
            <a href="#" className="text-blue-500 w-max">Get Started &rarr;</a>
        </div>
    )
}

export default Service