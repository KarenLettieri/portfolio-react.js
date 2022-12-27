import React from 'react'

const About = () => {
    return (
        <div name='sobre mi' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Sobre Mí
                    </p>
                </div>
                <p className='text-xl mt-20'>💾Mi nombre es Karen, tengo 20 años y estoy en busca de mi primer trabajo en el mundo IT.
                Poseo un alto nivel de Inglés  (C1 - Certificado por EF) y siempre estoy dispuesta a aprender lo necesario para seguir creciendo.



                </p>
                <br />

                <p className='text-xl'> 💻Soy el tipo se persona que adora el conocimiento, enfocada en mi trabajo, con un gran compromiso y soy muy detallista.
                    Me encanta estar al dia con el aprendizaje de cualquier tipo de derivado de la programación y desarrollo web. 
                    Sigo aprendiendo actualmente nuevas tecnologias como Node.js, .NET, entre otros. </p>
            </div>
        </div>
    )
}

export default About