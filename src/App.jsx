import React from "react";
import Stories, { WithSeeMore } from "react-insta-stories";
import { TextAnimate } from "./text-animate.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// List of all images to prefetch
const imagesToPrefetch = [
  '/assets/img/1.png',
  '/assets/img/2.png',
  '/assets/img/3.png',
  '/assets/img/4.png',
  '/assets/img/5.png',
  '/assets/img/6.png',
  '/assets/img/7.png',
  '/assets/img/8.png',
  '/assets/img/9.png',
  '/assets/img/boho/boho1.jpg',
  '/assets/img/boho/boho2.jpg',
  '/assets/img/boho/boho3.jpg',
];

// Function to prefetch images
const prefetchImages = (urls) => {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

class App extends React.Component {
  componentDidMount() {
    // Prefetch all images when component mounts
    prefetchImages(imagesToPrefetch);
  }

  render() {
    return (
      <div className="stories-container">
        <Stories
          loop
          width={'inherit'}
          height={'100vh'}
          keyboardNavigation
          defaultInterval={6000000}
          stories={slides}
          onAllStoriesEnd={() => {}}
          onStoryStart={() => {}}
          onStoryEnd={() => {}}
          onNext={() => {
            console.log('story next');
          }}
          onPrevious={() => {
            console.log('story prev');
          }}
          storyStyles={{
            width: 'auto',
            maxWidth: '100vw',
            maxHeight: '100vh',
            margin: '0 auto'
          }}
        />
      </div>
    );
  }
}

const slides = [
  {
		url: '/assets/img/1.png',
	},
  {
    url: '/assets/img/2.png',
    seeMoreCollapsed: ({ toggleMore }) => (
      <div className="mb-[120px] flex flex-col items-center justify-center">
        <p className="text-center text-md text-black font-proxima">
        Если не особо понимаешь что такое БОХО, то тебе
        </p>
        <span className="inline-block text-center text-md cursor-pointer text-black font-proxima underline" onClick={() => toggleMore(true)}>
        сюда
        </span>
      </div>
    ),
    seeMore: ({ close }) => (
      <div className="w-full h-full p-6 bg-white">
        <Swiper
            direction="vertical"
            slidesPerView={1}
            mousewheel={true}
            touchRatio={1}
            touchAngle={90}
            resistance={true}
            resistanceRatio={0.85}
            speed={400}
            threshold={20}
            shortSwipes={true}
            longSwipes={true}
            followFinger={true}
            grabCursor={true}
            touchStartPreventDefault={false}
            touchMoveStopPropagation={true}
            pagination={{
              clickable: false,
              type: 'bullets',
            }}
            modules={[Mousewheel, Pagination]}
            className="h-full relative"
            onSlideChange={(swiper) => {
              swiper.allowTouchMove = true;
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full pointer-events-none">
                <img 
                  src="/assets/img/boho/boho1.jpg" 
                  alt="Boho Style 1" 
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full pointer-events-none">
                <img 
                  src="/assets/img/boho/boho2.jpg" 
                  alt="Boho Style 2" 
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full pointer-events-none">
                <img 
                  src="/assets/img/boho/boho3.jpg" 
                  alt="Boho Style 3" 
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        <p className="underline cursor-pointer text-black" onClick={close}>
          Back to story
        </p>
      </div>
    ),
    preload: true
  },
  {
    url: '/assets/img/3.png',
  },
  {
    url: '/assets/img/4.png',
  },
  {
    url: '/assets/img/5.png',
  },
  {
    url: '/assets/img/6.png',
  },
  {
    url: '/assets/img/7.png',
  },
  {
    url: '/assets/img/8.png',
  },
  {
    url: '/assets/img/9.png',
  },
 ];

export default App;
