import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  buttonOnClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
  buttonOnClick
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-full"
          layout="fill"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {buttonText && (
          <div className="mt-4">
            <Button text={buttonText} href={buttonLink} onClick={buttonOnClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
