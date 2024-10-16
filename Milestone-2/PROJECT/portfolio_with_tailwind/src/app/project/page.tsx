import ProjectCard from '@/components/Card';
import React from 'react';

const projects = [
    {
        imageSrc: 'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/634d61ab95ff7003477f6c1f_d28Qv2T_gk1iZiHd2jgwYTCtdKB0cEX-hQmhwLIbzglorQzErM9tLeq0Sw0jp4j37mXfa6YP9zQA2ZcaW1D5DdjqOBmvB8kH3yd-F9dcEpxvDwlSxao1Qlgn24KC_GDcRdsd7TJ0zJjTTVURHJX3A-hrjWKp0JpuAPL28G6nrXA55Sad6Ujn-A79sA.jpeg',
        imageAlt: 'Project 1 Image',
        title: 'Apple Website',
        description: 'I Developed Responsive Apple Website For Testing My Basic Skills.',
        buttonText: 'View Project',
        buttonLink: 'https://up-iclone-home.netlify.app/',
    },
    {
        imageSrc: 'https://assets.weforum.org/article/image/f1rGh3mhhk-oj1fj1qjwJ56U37_dJ-MGTGGFHzBp25Q.jpg',
        imageAlt: 'Project 2 Image',
        title: 'Responsive Crypto',
        description: 'Programmed Normal Crypto Website Used Media Queries',
        buttonText: 'View Project',
        buttonLink: 'https://umarprogrammer19-crypto.netlify.app/',
    },
    {
        imageSrc: 'https://media.licdn.com/dms/image/D4D12AQFq9CAlVcXr3g/article-cover_image-shrink_720_1280/0/1673980988900?e=2147483647&v=beta&t=g_VjCi_pbE-J4RQRh6xAUZsWh3HQ6jVpIJaw4tEsFaE',
        imageAlt: 'Project 3 Image',
        title: 'Currency Converter',
        description: 'Currency Convertor With Life Time Rates Developed Using Javascript.',
        buttonText: 'View Project',
        buttonLink: 'https://up-currency-convertor.netlify.app/',
    },
];


const page = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imageSrc={project.imageSrc}
                            imageAlt={project.imageAlt}
                            title={project.title}
                            description={project.description}
                            buttonText={project.buttonText}
                            buttonLink={project.buttonLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page