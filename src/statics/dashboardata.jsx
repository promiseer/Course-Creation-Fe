import {
  imgFive,
  imgFour,
  imgOne,
  imgSeven,
  imgSix,
  imgThree,
  imgTwo,
} from '../assets';

export const dashboardDountData = [
  {
    id: 1,
    link: '/Courses',
    img: imgOne,
    width: '',
    height: '',
    x: '137',
    y: '0',
    d: 'M140.236 30.7215L203.892 147.146C258.492 120.99 309.667 133.994 328.429 143.765L384.31 24.0947C281.524 -22.4608 178.766 9.11445 140.236 30.7215Z',
    sizes: 'h-[136px] top-0 left-[160px] w-[205px]',
    children: (
      <span className="text-xl font-bold flex items-center gap-1">
        <span className="magnolia-script font-normal">my</span>
        <span className="montserrat">COURSES</span>
      </span>
    ),
  },
  {
    id: 2,
    link: '/Resources',
    img: imgFour,
    width: '240',
    height: '',
    x: '320',
    y: '12',
    d: 'M531.5 206.5L405 235.5C397 189.1 355.667 156.5 336 146L392 28C486.4 75.2 524.333 166.667 531.5 206.5Z',
    sizes: 'h-[150px] bottom-[328px] right-[34px] w-[150px]',
    children: (
      <>
        <span className="magnolia-script font-normal block text-2xl">
          Useful
        </span>
        <span className="montserrat text-base uppercase font-bold">
          Resources
        </span>
      </>
    ),
  },
  {
    id: 3,
    link: '/coaching',
    img: imgSix,
    width: '',
    height: '',
    x: '385',
    y: '211',
    d: 'M483.5 435L383.5 354.5C415.1 318.5 413.333 263.5 408.5 240.5L534.5 210.5C560.1 315.7 511.167 404 483.5 435Z',
    sizes: 'h-[150px] bottom-[157px] right-[6px] w-[140px]',
    children: (
      <>
        <span className="montserrat text-base font-medium block">1:1</span>
        <span className="montserrat font-bold text-base uppercase">
          COACHING
        </span>
      </>
    ),
  },
  {
    id: 4,
    link: '',
    img: imgFive,
    width: '269',
    height: '',
    x: '272',
    y: '332',
    d: 'M275.5 539V410C330.3 410 369 376 381.5 359L481 438.5C413 524.1 315.667 541.167 275.5 539Z',
    sizes: ' h-[150px] bottom-[15px] right-[80px] w-[203px]',
    children: <span className="block  font-bold montserrat">CHALLENGE</span>,
  },
  {
    id: 5,
    link: '/Support',
    img: imgSeven,
    width: '234',
    height: '',
    x: '38',
    y: '343',
    d: 'M268 409.5V539C164 541 87.3333 473.5 62 439.5L162 359C192.4 399.8 245.333 409.667 268 409.5Z',
    sizes: 'h-[111px] bottom-[33px] left-[84px] w-[183px]',
    children: <span className="block  font-bold montserrat">SUPPORT</span>,
  },
  {
    id: 6,
    link: '',
    img: imgTwo,
    width: '',
    height: '',
    x: '0',
    y: '212',
    d: 'M6.72353 211L133.724 239.5C121.724 291.9 146.057 337.667 159.724 354L58.2235 434.5C-9.77647 349.3 -4.44313 250 6.72353 211Z',
    sizes: 'h-[150px] bottom-[155px] left-0 w-[145px]',
    children: (
      <>
        <span className="magnolia-script font-normal block text-base">
          Upcoming
        </span>
        <span className="montserrat text-base uppercase font-bold">
          WORKSHOPS
        </span>
      </>
    ),
  },
  {
    id: 7,
    link: '',
    img: imgThree,
    width: '200',
    height: '',
    x: '0',
    y: '32',
    d: 'M194 152C153.025 180.4 139.467 219.167 137.809 235L12 206C28.3104 116.8 101.674 54.8333 136.317 35L194 152Z',
    sizes: 'h-[190px] top-[49px] left-[30px] w-[150px]',
    children: (
      <>
        <span className="magnolia-script font-normal block text-base">
          Upcoming
        </span>
        <span className="montserrat text-base uppercase font-bold">EVENTS</span>
      </>
    ),
  },
];
