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
          preload={false}
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

const handleOpenAsgard = () => {
  window.open('https://yandex.ru/maps/-/CHgAVWP5', '_blank', 'noopener,noreferrer');
};

const handleOpenPalma = () => {
  window.open('https://yandex.ru/maps/-/CHgIyJOr', '_blank', 'noopener,noreferrer');
};

const slides = [
  
  {
		url: '/assets/img/1.png',
	},
  {
		url: '/assets/img/2.png',
	},
  {
    url: '/assets/img/3.png',
    seeMoreCollapsed: () => (
      <button 
        className="animate-bounce fixed top-[calc(50%-10px)] bg-white/10 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 text-black font-tuffybold text-xl rounded-full p-1 shadow-lg hover:shadow-xl"
        onClick={handleOpenPalma}
      >
        <img 
          src="/assets/svg/restaurant.png" 
          alt="Карта" 
          className="w-6 h-6 object-contain"
        />
      </button>
    ),
    seeMore: () => {},
  },
  {
    url: '/assets/img/4.png',
  },
  {
    url: '/assets/img/5.png',
    seeMoreCollapsed: () => (
      <button 
        className="animate-bounce fixed top-[calc(50%-10px)] bg-white/10 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 text-black font-tuffybold text-xl rounded-full p-1 shadow-lg hover:shadow-xl"
        onClick={handleOpenAsgard}
      >
        <img 
          src="/assets/svg/hotel.png" 
          alt="Карта" 
          className="w-8 h-8 object-contain"
        />
      </button>
    ),
    seeMore: () => {},
  },  
  {
    url: '/assets/img/6.png',
    seeMoreCollapsed: ({ toggleMore }) => (
      <button 
        className="animate-bounce fixed top-[calc(50%-10px)] bg-white/10 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 text-black font-tuffybold text-xl rounded-full p-1 shadow-lg hover:shadow-xl"
        onClick={() => {toggleMore(true)}}
      >
        <img 
          src="/assets/svg/clothes.png" 
          alt="Карта" 
          className="w-8 h-8 object-contain"
        />
      </button>
    ),
    seeMore: ({ close }) => (
      <div className="w-full h-full p-6 bg-black">
        <p className="cursor-pointer font-tuffy text-white mt-4 flex items-center gap-2 hover:text-gray-300 transition-colors uppercase" onClick={close}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          назад
        </p>
        <Swiper
            direction="vertical"
            slidesPerView={1}
            mousewheel={true}
            allowTouchMove={true}
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
              // Update button visibility
              const upButton = document.querySelector('.swiper-tip-up');
              const downButton = document.querySelector('.swiper-tip-down');
              if (upButton) upButton.style.display = swiper.isBeginning ? 'none' : 'flex';
              if (downButton) downButton.style.display = swiper.isEnd ? 'none' : 'flex';
            }}
          >
            <div 
              className="swiper-tip-up absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/30 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-black/50 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                const swiper = e.currentTarget.closest('.swiper').swiper;
                swiper.slidePrev();
              }}
              style={{ display: 'none' }} // Initially hidden
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span className="text-sm font-medium uppercase font-tuffy">вверх</span>
            </div>
            <div 
              className="swiper-tip-down absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/30 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-black/50 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                const swiper = e.currentTarget.closest('.swiper').swiper;
                swiper.slideNext();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-sm font-medium uppercase font-tuffy">вниз</span>
            </div>
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
      </div>
    ),
  },
  {
    url: '/assets/img/7.png',
  },
 ];

export default App;
