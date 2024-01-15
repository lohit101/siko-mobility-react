import React from "react";

interface Props {
    icon: string;
    heading: string;
    subheading: string;
}

const Benefit: React.FC<Props> = ({icon, heading, subheading}) => {
    return (
        <div className="flex flex-row bg-gray-100 items-center justify-start gap-5 rounded-lg p-3 hover:shadow-lg transition-all">
            <div className="bg-blue-200 p-2 rounded-lg">
                <img className="w-12" src={icon}></img>
            </div>
            <div className="flex flex-col w-2/3">
                <p className="font-semibold text-lg">{heading}</p>
                <p className="text-sm">{subheading}</p>
            </div>
        </div>
    )
}

export default Benefit