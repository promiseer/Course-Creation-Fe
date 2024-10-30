import React from 'react';
import EpisodeImage from '../../../assets/Podcast/heroimage.jpg';
import shuffle from '../../../assets/Podcast/Shuffle.svg';
import Skipback from '../../../assets/Podcast/Skip Back.svg';
import SkipFor from '../../../assets/Podcast/Skip Fwd.svg';
import Pause from '../../../assets/Podcast/Pause.svg';
import Repeat from '../../../assets/Podcast/Repeat.svg';
import Audio from '../../../assets/Podcast/audio.svg';
import download from '../../../assets/Podcast/Group.svg';
import share from '../../../assets/Podcast/share.svg';
import clock from '../../../assets/Podcast/clock.svg';
import calender from '../../../assets/Podcast/calender.svg';
import song from '../../../assets/Podcast/song.svg';

const episodes = [
  {
    id: 40,
    date: 'January 05, 2024',
    duration: '00:01:25',
    size: '12 MB',
    title: `WHY CAN'T MY KID JUST DO THE THINGS?`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget',
    progress: '1:22',
    total: '3:40',
    color: 'bg-[#F1E1E4]',
  },
  {
    id: 39,
    date: 'January 05, 2024',
    duration: '00:01:25',
    size: '12 MB',
    title: 'THE EMOTIONAL INTELLIGENT "BRAIN HACK" FOR PARENTS',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget',
    progress: '1:46',
    total: '3:40',
    color: 'bg-[#C2D5E4]',
  },
];

const InfoItem = ({ icon, text }) => (
  <div className='flex items-center space-x-2'>
    <img src={icon} alt={text} className='w-4 h-4' />
    <span className='text-sm'>{text}</span>
  </div>
);

const ControlButton = ({ icon, alt, className = '' }) => (
  <button className={`p-2 rounded-full ${className}`}>
    <img src={icon} alt={alt} className='w-5 h-5' />
  </button>
);

const PodcastEpisode = ({ episode }) => (
  <div className={`p-4 ${episode.color} rounded-lg shadow-md mb-8`}>
    <div className='flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4'>
      <img
        src={EpisodeImage}
        alt='episode'
        className='w-full md:w-[250px] h-auto md:h-[250px] object-cover rounded'
      />
      <div className='flex-grow'>
        <div className='flex flex-wrap gap-3 mb-4'>
          <InfoItem icon={calender} text={episode.date} />
          <InfoItem icon={clock} text={episode.duration} />
          <InfoItem icon={song} text={episode.size} />
        </div>

        <h2 className='text-xl md:text-2xl 2xl:text-[36px] font-semibold text-[#376489] mb-2'>
          {episode.title}
        </h2>
        <p className='text-[#274C69] text-sm md:text-base 2xl:text-[20px] mb-4'>
          {episode.description}
        </p>

        <div className='flex flex-wrap items-center justify-between mt-4 space-y-2 md:space-y-0'>
          <div className='flex items-center space-x-2'>
            <ControlButton icon={shuffle} alt='shuffle' />
            <ControlButton icon={Skipback} alt='Skip back' />
            <ControlButton icon={Pause} alt='Pause' className='bg-[#C1989F]' />
            <ControlButton icon={SkipFor} alt='Skip forward' />
            <ControlButton icon={Repeat} alt='Repeat' />
          </div>

          <div className='flex items-center space-x-2 flex-grow md:max-w-[50%]'>
            <span className='text-sm'>{episode.progress}</span>
            <input type='range' className='flex-grow' />
            <span className='text-sm'>{episode.total}</span>
          </div>

          <div className='flex items-center space-x-2'>
            <button className='text-[#C1989F] font-semibold'>x1</button>
            <ControlButton icon={Audio} alt='Voice' />
            <ControlButton
              icon={download}
              alt='download'
              className='bg-[#C1989F]'
            />
            <ControlButton icon={share} alt='share' className='bg-[#C1989F]' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

function PodcastEpisodes() {
  return (
    <div className='container px-4 mx-auto'>
      <div className='pt-16 md:pt-24'>
        {episodes.map((episode) => (
          <PodcastEpisode key={episode.id} episode={episode} />
        ))}
      </div>
      <div className='flex items-center justify-center py-8 md:py-16 2xl:pb-32'>
        <button className='px-8 py-3 text-white text-sm md:text-base transition duration-300 bg-[#376489] rounded-full hover:bg-[#274C69]'>
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default PodcastEpisodes;
