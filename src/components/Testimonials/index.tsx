import React from "react";
import Testimonial from "./Testimonial";

interface Props {
    heading: string;
    subheading: string;
    date: string;
    name: string;
}

const Testimonials: React.FC<Props> = ({heading, subheading, date, name}) => {
    return (
        <div className="flex flex-col items-center justify-center py-5 px-10 bg-[url('./Section.png')] bg-cover bg-no-repeat bg-center">
            <p className="m-5 my-10 text-5xl font-bold max-w-[50%] text-center">Ils nous ont fait confiance À votre tour !</p>
            <div className="grid grid-cols-3 gap-5 w-9/12">
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Prestation excellente" subheading="Top , Je recommande Siko Mobility pour leur professionnalisme . Tristan D’Halluin et au top trés a ’écoute du client. 👌" date="2023-09-11" name="Quentin Berthe" />
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
            </div>
        </div>
    )
}

export default Testimonials