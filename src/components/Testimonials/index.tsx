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
        <div className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 bg-[url('./TestimonialBg.png')] bg-cover bg-no-repeat bg-center">
            <p className="text-3xl mb-20 sm:text-5xl font-bold w-full text-start sm:text-center sm:w-1/2 capitalize">Ils nous ont fait confiance À votre tour !</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full sm:w-9/12">
                <Testimonial heading="Recommandation sincére" subheading="Tres bonne expérience, tres accueillant et a I'écoute. Je recommande pour les solutions de financement 😁😁" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Prestation excellente" subheading="Top , Je recommande Siko Mobility pour leur professionnalisme . Tristan D’Halluin et au top trés a ’écoute du client. 👌" date="2023-09-11" name="Quentin Berthe" />
                <Testimonial heading="Service incroyable" subheading="Je recommande a 100%. En quelques mots : Rapide, efficace et c’est un plaisir d’échanger avec eux par téléphone" date="2023-09-14" name="Manelle" />
                <Testimonial heading="Feedback positif" subheading="Simple, rapide et efficace ! Une équipe a I'écoute ! Je recommande vivement !" date="2023-09-19" name="Robin Mourier" />
                <Testimonial heading="Professionnalisme au top" subheading="Société trés professionnel,et réactive Tres bonne communication" date="2023-09-15" name="Rak" />
                <Testimonial heading="Super expérience" subheading="Sérieux, a I'écoute et trés disponible je recommande fortement cette entreprise les yeux fermés !!!" date="2023-09-18" name="Wady Talhaoui" />
                <Testimonial heading="Merci pour l'aide" subheading="Merciii pour I assistance apporter de I équipe et aux employer qui sont a I écoute et font tout pour nous aider merci encor et a bientot" date="2023-09-19" name="Kevin" />
                <Testimonial heading="Service incroyable " subheading="Je recommande a 100%. En quelques mots : Rapide, efficace et c’est un plaisir d’échanger avec eux par téléphone 😊" date="2023-09-14" name="Manelle BCxit" />
                <Testimonial heading="Aide inestimable" subheading="Excellente expérience humaine vécue avec Tristan de Siko qui me guidera sur chaques routes I Merci encore J 🙏" date="2023-09-17" name="Youssouf SANOGO" />
            </div>
        </div>
    )
}

export default Testimonials