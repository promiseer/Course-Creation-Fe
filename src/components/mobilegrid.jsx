import React from 'react';

// Card Component
const Card = ({ title, description, bgColor, textColor }) => {
  return (
    <div className={`w-[185px] h-[136px] md:w-[240px] md:h-[153px]  ${bgColor}`}>
      <p className={` mt-[40px] text-center text-[14px] md:text-[16px] font-medium font-montserrat ${textColor} m-4 md:m-5 leading-[17px] md:leading-[19px]`}>
        {description}
      </p>
      <p className={`text-[14px] md:text-[16px] font-bold font-montserrat ${textColor} text-center`}>
        {title}
      </p>
    </div>
  );
};

// Card Grid Component
const MobileGrid = () => {
  // Example data for 10 cards
  const totalCards = 10; // Total number of cards
  const showCards = window.innerWidth >= 768 ? 9 : totalCards; // Show 9 for desktop, all for mobile

  const cardData = Array.from({ length: totalCards }, (_, index) => ({
    title: `Article ${index + 1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    bgColor: 
      (index === 0 || index === 3 || index === 4 || index === 7 || index === 8) 
        ? 'bg-bblue' // Blue at specified indices
        : 'bg-frose', // Rose for others
    textColor: 
      (index === 0 || index === 3 || index === 4 || index === 7 || index === 8) 
        ? 'text-white' 
        : 'text-bblue',
  }));

  return (
    <div className="w-[390px] md:w-[750px] md:h-[490px]">
      {/* Grid layout for cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 mx-auto">
        {cardData.slice(0, showCards).map((card, index) => (
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

export default MobileGrid;
