import React from 'react';
import Card from './card';
import image1 from '../assets/v1.png'; 
import image2 from '../assets/v2.png';
import image3 from '../assets/v3.png';

const CardList = () => {
  const items = [
    {
      id: 1,
      title: 'MODULE 1.5',
      moduleName: 'MODULE NAME',
      duration: '1 Hour 24 Minutes',
      students: '8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: image1,
      textColor: 'text-white',
      imageOverlayColor: 'gradb',
      textAreaColor: 'bg-brown',
      borderColor: 'border-dark-blue',
    },
    {
      id: 2,
      title: 'MODULE 1.5',
      moduleName: 'MODULE NAME',
      duration: '1 Hour 24 Minutes',
      students: '16',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: image3,
      textColor: 'text-white',
      imageOverlayColor: 'gradb',
      textAreaColor: 'bg-blue',
      borderColor: 'border-brown',
    },
    {
      id: 3,
      title: 'MODULE 1.5',
      moduleName: 'MODULE NAME',
      duration: '1 Hour 24 Minutes',
      students: '12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: image2,
      textColor: 'text-white',
      imageOverlayColor: 'gradb',
      textAreaColor: 'bg-brown',
      borderColor: 'border-dark-blue',
    },
    {
      id: 4,
      title: 'MODULE 1.5',
      moduleName: 'MODULE NAME',
      duration: '1 Hour 24 Minutes',
      students: '16',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: image3,
      textColor: 'text-white',
      imageOverlayColor: 'dark-blue',
      textAreaColor: 'bg-blue',
      borderColor: 'border-brown',
    },
  ];

  return (
    <div className="w-full md:p-0 p-4">
      <div className="grid grid-cols-1 gap-0.1">
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            moduleName={item.moduleName}
            title={item.title}
            duration={item.duration}
            students={item.students}
            description={item.description}
            imageSrc={item.imageSrc}
            textColor={item.textColor}
            imageOverlayColor={item.imageOverlayColor}
            textAreaColor={item.textAreaColor}
            borderColor={item.borderColor} // Pass the correct prop
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
