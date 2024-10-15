import React from 'react';

// Card Component
const Card = ({ title, description, bgColor, textColor }) => {
  return (
    <div className={`w-[190px] h-[136px] md:w-[240px] md:h-[153px] ${bgColor}`}>
      <p className={` md:mt-[40px] text-center text-[14px] md:text-[16px] font-medium font-montserrat ${textColor} m-4 md:m-5 leading-[17px] md:leading-[19px]`}>
        {description}
      </p>
      <p className={`text-[14px] md:text-[16px] font-bold font-montserrat ${textColor} text-center`}>
        {title}
      </p>
    </div>
  );
};

// Card Grid Component
const CardGrid = () => {
  // Example data for 10 cards
  const cardData = Array.from({ length: 9 }, (_, index) => ({
    title: `Article ${index + 1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    bgColor: index % 2 === 0 ? 'bg-bblue' : 'bg-frose', // Alternate between blue and rose
    textColor: index % 2 === 0 ? 'text-white' : 'text-bblue',
  }));

  return (
    <div className="w-[390px] md:w-[750px] md:h-[490px]">
      {/* Grid layout for cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
        {cardData.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            description={card.description} 
            bgColor={card.bgColor} 
            textColor={card.textColor} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
