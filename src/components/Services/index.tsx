import React from "react";
import Service from "./Service";

import ServiceImage1 from './serviceImage (1).png';
import ServiceImage2 from './serviceImage (2).png';
import ServiceImage3 from './serviceImage (3).png';

interface Props {
    heading: string;
    subheading: string;
    image: string;
}

const Services: React.FC<Props> = ({heading, subheading, image}) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 px-5 sm:px-10 bg-gradient-to-b from-white to-[#F1F6FF]">
            <p className="m-0 sm:m-10 text-3xl sm:text-5xl font-bold capitalize">Nos Services pour toutes les mobilités</p>
            <div className="flex flex-col sm:flex-row w-full sm:w-9/12">
                <Service image={ServiceImage1} heading="PAIEMENT 3/4/10 FOIS" subheading="Faites un paiement en 3, 4 ou 10 fois en carte bleue. C'est sans justificatif." />
                <Service image={ServiceImage2} heading="FINANCEMENT 12 A 60 MOIS" subheading="Faites une demande de financement de 12 à 60 fois. Obtenez un accord d'une de nos banques partenaires." />
                <Service image={ServiceImage3} heading="FORFAITS MOBILITÉ" subheading="Souscrivez à un abonnement assurance, assistance, garantie ou maintenance. Sans engagement." />
            </div>
        </div>
    )
}

export default Services