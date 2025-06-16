import React from "react";
import Stories, { WithSeeMore } from "react-insta-stories";
import { TextAnimate } from "./text-animate.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

class App extends React.Component {
  render() {
    return (
      <div className="stories-container">
        <Stories
          loop
          width={'inherit'}
          height={'100vh'}
          keyboardNavigation
          defaultInterval={6000}
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
        />
      </div>
    );
  }
}

const slides = [
  {
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          
          <img src="/assets/img/1.png" alt="Background" className="w-full h-full object-cover absolute top-0 left-0" />
          <span className="text-[48px] font-kaliningrad text-slate-900 mb-3 drop-shadow-lg flex justify-center items-center mt-[300px]">Добро пожаловать</span>
          <span className="text-[32px] font-felidae text-slate-900 mb-3 drop-shadow-lg flex justify-center items-center">Привет всем ребят ребят парни парни</span>
          <span className="text-[64px] font-laudatio text-slate-900 mb-3 drop-shadow-lg flex justify-center items-center mt-[400px]">Добро пожаловать</span>
          <span className="text-[44px] font-felidae font-bold text-slate-900 mb-3 drop-shadow-lg flex justify-center items-center">Привет всем ребят ребят парни парни</span>
        </div>
      );
    },
    preload: true,
  },
  {
    content: ({ action, story }) => {
      return (
        <WithSeeMore story={story} action={action}>
          <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/2.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        </WithSeeMore>
      );
    },
    seeMoreCollapsed: ({ toggleMore }) => (
      
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-md text-black font-felidae">
        Если не особо понимаешь что такое этот ваш БОХО, то тебе
        </p>
        <span className="inline-block text-center text-md cursor-pointer text-black font-felidae underline" onClick={() => toggleMore(true)}>
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
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full">
                <img 
                  src="/assets/img/boho/boho1.jpg" 
                  alt="Boho Style 1" 
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <img 
                  src="/assets/img/boho/boho2.jpg" 
                  alt="Boho Style 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <img 
                  src="/assets/img/boho/boho3.jpg" 
                  alt="Boho Style 3" 
                  className="w-full h-full object-cover"
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
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/3.png" alt="Background" className="w-full h-full object-cover" />
        </div>
      );
    },
    preload: true
  },
  {
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/4.png" alt="Background" className="w-full h-full object-cover" />
        </div>
      );
    },
    preload: true
  },
  {
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/5.png" alt="Background" className="w-full h-full object-cover" />
        </div>
      );
    },
    preload: true
  },
  {
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/6.png" alt="Background" className="w-full h-full object-cover" />
        </div>
      );
    },
    preload: true
  },
  {
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/7.png" alt="Background" className="w-full h-full object-cover" />
        </div>
      );
    },
    preload: true
  },
  {
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/8.png" alt="Background" className="w-full h-full object-cover" />
        </div>
      );
    },
    preload: true
  },
  {
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/9.png" alt="Background" className="w-full h-full object-cover" />
        </div>
      );
    },
    preload: true
  },
  // {
  //   content: () => {
  //     return (
  //       <div className="relative w-full h-full overflow-hidden">
  //         <img src={'assets/img/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg'} alt="Background" className="w-full h-full object-cover" />
  //         <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center p-5">
  //           {/* <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">Welcome</h1> */}
  //           <TextAnimate text="Welcome" type="rollIn" className="text-4xl font-bold text-white mb-3 drop-shadow-lg" />
  //           <p className="text-2xl text-white drop-shadow-md">Our Wedding Story</p>
  //         </div>
  //       </div>
  //     );
  //   }
  // },
  // {
  //   content: () => {
  //     return (
  //       <div className="relative w-full h-full overflow-hidden">
  //         <img src={'assets/img/evelina-friman-hw_sKmjb0ns-unsplash.jpg'} alt="Background" className="w-full h-full object-cover" />
  //         <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center p-5">
  //           <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">Welcome</h1>
  //           <p className="text-2xl text-white drop-shadow-md">Our Wedding Story</p>
  //         </div>
  //       </div>
  //     );
  //   }
  // },
  // {
  //   content: () => {
  //     return (
  //       <div className="relative w-full h-full overflow-hidden">
  //         <img src={'assets/img/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg'} alt="Background" className="w-full h-full object-cover" />
  //         <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center p-5">
  //           <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">Welcome</h1>
  //           <p className="text-2xl text-white drop-shadow-md">Our Wedding Story</p>
  //         </div>
  //       </div>
  //     );
  //   }
  // },
  // {
  //   content: () => {
  //     return (
  //       <div className="relative w-full h-full overflow-hidden">
  //         <img src={'assets/img/ksav-pun-EHAn0csi6-E-unsplash.jpg'} alt="Background" className="w-full h-full object-cover" />
  //         <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center p-5">
  //           <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">Welcome</h1>
  //           <p className="text-2xl text-white drop-shadow-md">Our Wedding Story</p>
  //         </div>
  //       </div>
  //     );
  //   }
  // },
  
  // {
  //   content: () => {
  //     return (
  //       <div className="bg-black w-full h-full p-5 flex items-center justify-center">
  //         <img 
  //           className="block w-full h-full object-contain object-top rounded-none" 
  //           src={locationJourneyImage} 
  //           alt="Location journey"
  //         />
  //       </div>
  //     );
  //   }
  // },
  // {
  //   content: Story2
  // }
];

export default App;
