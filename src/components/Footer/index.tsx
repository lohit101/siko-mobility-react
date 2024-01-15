import React from "react";
import Logo from "./logo.png"

const Footer: React.FC = () => {
    return (
        // <div className="flex items-center justify-center">
        //     <div className="bg-white w-4/5 border-t border-gray-300">
        //         <div className=""></div>
        //         <div className="flex flex-row items-center justify-between py-10">
        //             <p className="text-gray-500">&copy; 2021 Siko Mobility. Tous droits reserves.</p>
        //             <div className="flex flex-row gap-2">
        //                 <a href="#" className="">
        //                     <img className="w-5" src="data:image/png;base64,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"></img>
        //                 </a>
        //                 <a href="#" className="">
        //                     <img className="w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAElEQVR4nO2WO2gVQRSGJ74QRHyAXWqJYi02KoogmGCjF0RBIcUle84u956z+Kj8zyaIERERbCSVioVaKKKNgk0sxUY7bdSUIoiF4iPKXKM3XPZ5s5XcD6ZZZubjPGZmnRswoAQngNUU4zALJkktYUkO+W+98wCsSt0girG11cJ6V4FAkj0k9p7Vfi0epPY2kGS3CDaS2jESPB4/eWFt6iYsuMFis5kTepgQ7GCxL73S7sA3VvxgxTwLjjrnhtLFiledBYLn0SkMF4lJ8CJb+k8+T2L3SOwSq0UZYnvdTRU+sOBIljRoTW4pli4aYncbjTvLsyK+n7JglgQHetPEioNlpSQ2A2BZZupyNxO8Y7UroSYNH20QJ6NlxX5Nbs2azWsrSe1mpRSWGL67c8Us9pLVrnfqW6scmwvEeFh3tKz2OfPi6NY42V+/GA9ypV25TdUpJrWglNgTCI6zYm7JYsHHsreg8+fNnztSe0KKr0sUW+loPSxo11DbueDM+Q2uIkMkuNp3XcV+hjH2un4J29jnuzLt2StoqKRv6V9CxQgpnlWQXs58/oqI44trFs70bRL7Xk7YacT0Zy+PsJ3sZLVHJHjz5wGv1EhPJ2Jsc/3SPD29jgSh/xEokdJPpHaLYuxydRJF5zaxYmzhaE2RYpoFZ0kxHgq2A1hRq3DAf8dvyXBVAZxGzEkAAAAASUVORK5CYII="></img>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <footer className='w-full flex items-center justify-center'>
            <div className="bottom-0 left-0 flex flex-col w-4/5 gap-8 px-8 py-16 md:gap-12">
                <div className="flex flex-row">
                    <div className='flex flex-col gap-6 w-2/3'>
                        <ul className='flex flex-col'>
                            <li className="my-3"><img src={Logo} alt="Siko Mobility"></img></li>
                            <li className="text-sm">contact@sikomobility.com</li>
                            <li className="text-sm">86 rue Dutot, 75015 Paris</li>
                            <li className="text-sm my-3 italic">Siko Mobility respecte les normes sociales et environnementales et s'inscrit dans une démarche de progrès.</li>
                        </ul>
                    </div>
                    <div className='grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-3 w-2/3 ml-10'>
                        <div className='flex flex-col gap-6 w-full'>
                            <label className='text-black'>INFORMATIONS</label>
                            <ul className='flex flex-col gap-3 text-gray-500 '>
                                <li>Mentions légales</li>
                                <li>Conditions générales de vente</li>
                                <li>Politique de confidentialité</li>
                                <li>RGPD & Cookies</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6 w-full'>
                            <label className='text-black'>SIKO MOBILITY</label>
                            <ul className='flex flex-col gap-3 text-gray-500'>
                                <li>Accueil</li>
                                <li>Devenir partenaire</li>
                                <li>Qui sommes-nous ?</li>
                                <li>Contact</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6 w-full'>
                            <label className='text-black'>NOS SERVICES</label>
                            <ul className='flex flex-col gap-3 text-gray-500 '>
                                <li>Nos services</li>
                                <li>Assurance</li>
                                <li>Forfait entretien</li>
                                <li>Assistance dépannage</li>
                                <li>Garantie 3 ans</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent'></div>
                <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between '>
                    <div>
                        &copy; 2021 Siko Mobility. Tous droits reserves.
                    </div>
                    <div className='flex gap-4 p-2 rounded-md'>
                        <img className="w-5" src="data:image/png;base64,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"></img>
                        <img className="w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAElEQVR4nO2WO2gVQRSGJ74QRHyAXWqJYi02KoogmGCjF0RBIcUle84u956z+Kj8zyaIERERbCSVioVaKKKNgk0sxUY7bdSUIoiF4iPKXKM3XPZ5s5XcD6ZZZubjPGZmnRswoAQngNUU4zALJkktYUkO+W+98wCsSt0girG11cJ6V4FAkj0k9p7Vfi0epPY2kGS3CDaS2jESPB4/eWFt6iYsuMFis5kTepgQ7GCxL73S7sA3VvxgxTwLjjrnhtLFiledBYLn0SkMF4lJ8CJb+k8+T2L3SOwSq0UZYnvdTRU+sOBIljRoTW4pli4aYncbjTvLsyK+n7JglgQHetPEioNlpSQ2A2BZZupyNxO8Y7UroSYNH20QJ6NlxX5Nbs2azWsrSe1mpRSWGL67c8Us9pLVrnfqW6scmwvEeFh3tKz2OfPi6NY42V+/GA9ypV25TdUpJrWglNgTCI6zYm7JYsHHsreg8+fNnztSe0KKr0sUW+loPSxo11DbueDM+Q2uIkMkuNp3XcV+hjH2un4J29jnuzLt2StoqKRv6V9CxQgpnlWQXs58/oqI44trFs70bRL7Xk7YacT0Zy+PsJ3sZLVHJHjz5wGv1EhPJ2Jsc/3SPD29jgSh/xEokdJPpHaLYuxydRJF5zaxYmzhaE2RYpoFZ0kxHgq2A1hRq3DAf8dvyXBVAZxGzEkAAAAASUVORK5CYII="></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer