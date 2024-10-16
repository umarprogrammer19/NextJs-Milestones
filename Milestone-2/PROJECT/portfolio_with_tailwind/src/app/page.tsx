import ProjectCard from '@/components/Card';
import Section from '@/components/Section';
import Link from 'next/link';

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

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <Section
        imageSrc="https://i.pinimg.com/736x/2a/28/92/2a2892f2f154e1078923681436f30c4e.jpg"
        imageAlt="Hero Image"
        heading="Hi, I'm Umar Farooq"
        text="I'm a passionate developer who loves crafting exceptional digital experiences. I build websites and applications that are both functional and aesthetically pleasing."
        buttonText="View My Work"
        buttonLink="/projects"
        marginTop={true}
        reverse={true}
        isCircular={true}
      />

      {/* About Section with Circular Image */}
      <Section
        imageSrc="https://m.media-amazon.com/images/I/61ZfnhNeETL._AC_UF1000,1000_QL80_.jpg"
        imageAlt="About Me Image"
        heading="About Me"
        text="I am a dedicated and detail-oriented developer with a passion for creating beautiful, user-friendly digital experiences. With years of experience in web development, I have worked on a range of projects, from simple websites to complex applications."
        isCircular={true} // Circular image
      />

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8">Interested in working with us? Contact us today!</p>
          <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
