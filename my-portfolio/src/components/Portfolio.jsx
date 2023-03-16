import React from "react";
import rickmorty from "../assets/portfolio/RickMorty.PNG";
import neartalent from "../assets/portfolio/NearTalent.PNG";
import comingsoon from "../assets/portfolio/comingsoon.jpg";
import victorio from "../assets/portfolio/victorio.PNG";
import amazing from "../assets/portfolio/amazing.PNG";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: rickmorty,
            href: 'https://karenlettieri.github.io/rickandmorty-react/'
        },
        {
            id: 2,
            src: neartalent,
            href: 'https://neartalent.ar/'
        },

        {
            id: 3,
            src: victorio,
            href: 'https://main--tpingsoftware2022.netlify.app/'
        },
        {
            id: 4,
            src: amazing,
            href: 'https://karenlettieri.github.io/Mindhub-Task3-Js/'
        },


        {
            id: 5,
            src: comingsoon,
            href: 'https://github.com/KarenLettieri'
        }
    ];

    return (
        <div
            name="portfolio"
            className="ss bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        {" "}
                        Portfolio{" "}
                    </p>
                    <p className="py-6">Mirá alguno de mis proyectos</p>
                </div>



                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105object-contain h-48 w-96"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={href} target="_blank"
                                        rel="noreferrer"> Preview </a>
                                </button>

                            </div>
                        </div>
                    )

                    )}

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
