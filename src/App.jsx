import React from "react";
import Stories from "react-insta-stories";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // Prefetch all images when component mounts
    const allImages = [
      '/assets/img/1.png',
      '/assets/img/2.png',
      '/assets/img/3.png',
      '/assets/img/4.png',
      '/assets/img/5.png',
      '/assets/img/6.png',
      '/assets/img/7.png',
      '/assets/img/8.png',
    ];
    let loaded = 0;
    allImages.forEach(src => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === allImages.length) {
          this.setState({ loading: false });
        }
      };
      img.src = src;
    });
  }

  render() {
    return (
      <>
        {this.state.loading && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#fff',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            transition: 'opacity 0.4s',
          }}>
            <svg className="animate-spin" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
          </div>
        )}
        <div className="stories-container" style={{ opacity: this.state.loading ? 0 : 1, transition: 'opacity 0.4s' }}>
          <Stories
            loop
            width={'inherit'}
            height={'100vh'}
            keyboardNavigation
            defaultInterval={60000}
            stories={slides}
            onAllStoriesEnd={() => {}}
            onStoryStart={() => {}}
            onStoryEnd={() => {}}
            preload={true}
            storyStyles={{
              width: 'auto',
              maxWidth: '100%',
              maxHeight: '100vh',
              margin: '0 auto'
            }}
          />
        </div>
      </>
    );
  }
}

const openLink = (url) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = url;
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const handleOpenAsgard = () => {
  openLink('https://yandex.ru/maps/-/CHgAVWP5');
};

const handleOpenPalma = () => {
  openLink('https://yandex.ru/maps/-/CHgIyJOr');
};

const handleOpenTg = () => {
  openLink('https://t.me/+ayk4fhLOpbNhYzcy');
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
      <>
      <button 
        className="fixed top-[calc(50%-17px)] bg-transparent text-black font-tuffybold text-xl p-1"
        onClick={handleOpenPalma}
      >
        <img 
          src="/assets/svg/placeholder.png" 
          alt="Карта" 
          className="w-8 h-8 object-contain"
        />
      </button>
      <div className="fixed top-[calc(50%+12px)] p-2 animate-bounce cursor-pointer" onClick={handleOpenPalma}>
        <img 
          src="/assets/svg/touch.png" 
          alt="Карта" 
          className="w-8 h-8 object-contain"
        />
      </div>
      
      </>
    ),
    seeMore: () => {},
  },
  {
    url: '/assets/img/4.png',
  },
  {
    url: '/assets/img/5.png',
    seeMoreCollapsed: () => (
      <>
      <button 
        className="fixed top-[calc(50%-17px)] bg-transparent text-black font-tuffybold text-xl p-1"
        onClick={handleOpenAsgard}
      >
        <img 
          src="/assets/svg/placeholder.png" 
          alt="Карта" 
          className="w-8 h-8 object-contain"
        />
      </button>
      <div className="fixed top-[calc(50%+12px)] p-2 animate-bounce cursor-pointer" onClick={handleOpenAsgard}>
        <img 
          src="/assets/svg/touch.png" 
          alt="Карта" 
          className="w-8 h-8 object-contain"
        />
      </div>
      </>
    ),
    seeMore: () => {},
  },  
  {
    url: '/assets/img/6.png',
    seeMoreCollapsed: ({ toggleMore }) => (
      <>
      <button 
        className="fixed top-[calc(50%-17px)] bg-transparent text-black font-tuffybold text-xl p-1"
        onClick={() => {toggleMore(true)}}
      >
        <img 
          src="/assets/svg/sketch.png" 
          alt="Лукбук" 
          className="w-8 h-8 object-contain"
        />
      </button>
      <div className="fixed top-[calc(50%+12px)] p-2 animate-bounce cursor-pointer" onClick={() => {toggleMore(true)}}>
        <img 
          src="/assets/svg/touch.png" 
          alt="Карта" 
          className="w-8 h-8 object-contain"
        />
      </div>
      </>
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
            {/* men */}
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full pointer-events-none">
                  <img src={`/assets/img/lookbook/m/man-${index + 1}.jpg`} alt={`Boho Style ${index + 1}`} className="w-full h-full object-contain" />
                </div>
              </SwiperSlide>
            ))}
            {/* women */}
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full pointer-events-none">
                  <img src={`/assets/img/lookbook/w/woman-${index + 1}.jpg`} alt={`Boho Style ${index + 1}`} className="w-full h-full object-contain" />
                </div>
              </SwiperSlide>
            ))}
            {/* pairs */}
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full pointer-events-none">
                  <img src={`/assets/img/lookbook/p/pair-${index + 1}.jpg`} alt={`Boho Style ${index + 1}`} className="w-full h-full object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>        
      </div>
    ),
  },
  {
    url: '/assets/img/7.png',
    seeMoreCollapsed: () => (
      <>
      <button 
        className="fixed top-[calc(50%-17px)] left-[calc(50%-21px)] bg-transparent text-black font-tuffybold text-xl p-1"
        onClick={handleOpenTg}
      >
        <img 
          src="/assets/svg/telegram.png" 
          alt="Телеграм" 
          className="w-8 h-8 object-contain"
        />
      </button>
      <div className="fixed top-[calc(50%+12px)] p-2 animate-bounce transition-all duration-300 left-[calc(50%-21px)] cursor-pointer" onClick={handleOpenTg}>
        <img 
          src="/assets/svg/touch.png" 
          alt="Карта" 
          className="w-8 h-8 object-contain"
        />
      </div>
      </>
    ),
    seeMore: () => {},
  },  
  {
    url: '/assets/img/8.png',
  },
 ];

export default App;
