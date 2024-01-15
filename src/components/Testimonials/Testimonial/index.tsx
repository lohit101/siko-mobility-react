import React from "react";

interface Props {
    heading: string;
    subheading: string;
    date: string;
    name: string;
}

const Testimonial: React.FC<Props> = ({heading, subheading, date, name}) => {
    return (                
                <article className="flex max-w-full flex-col items-start justify-between bg-white p-5 border border-gray-200 rounded-lg shadow-xl ">
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                                <span className="absolute inset-0"></span>
                                {heading}
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{subheading}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs w-full mt-5">
                        <a href="#" className="bg-gray-50 font-medium text-gray-600">@{name}</a>
                        <p className="text-gray-500">{date}</p>
                    </div>
                </article>
    )
}

export default Testimonial