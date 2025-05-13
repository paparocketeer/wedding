import React from "react";
import Stories, { WithSeeMore } from "react-insta-stories";
import { TextAnimate } from "./text-animate.tsx";

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
          // onStoryEnd={(s, st) => console.log("story ended", s, st)}
          // onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
          // onStoryStart={(s, st) => console.log("story started", s, st)}
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
          
          {/* <img src="/assets/img/1.png" alt="Background" className="w-full h-full object-cover absolute top-0 left-0" /> */}
          <span className="text-[48px] font-kaliningrad text-slate-900 mb-3 drop-shadow-lg flex justify-center items-center mt-[300px]">Добро пожаловать</span>
          <span className="text-[32px] font-felidae text-slate-900 mb-3 drop-shadow-lg flex justify-center items-center">Привет всем ребят ребят парни парни</span>
          <span className="text-[64px] font-laudatio text-slate-900 mb-3 drop-shadow-lg flex justify-center items-center mt-[400px]">Добро пожаловать</span>
          <span className="text-[44px] font-felidae font-bold text-slate-900 mb-3 drop-shadow-lg flex justify-center items-center">Привет всем ребят ребят парни парни</span>
        </div>
      );
    },
    preload: true
  },
  {
    content: () => {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <img src="/assets/img/2.png" alt="Background" className="w-full h-full object-cover" />
        </div>
      );
    },
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
  //   content: ({ action, story }) => {
  //     return (
  //       <WithSeeMore story={story} action={action}>
  //         <div className="bg-pink-300 p-5 h-full">
  //           <h1 className="mt-[100%] mb-0 text-3xl">🌝</h1>
  //           <h1 className="mt-2 text-2xl">
  //             Join us on our special day
  //           </h1>
  //         </div>
  //       </WithSeeMore>
  //     );
  //   },
  //   seeMoreCollapsed: ({ toggleMore }) => (
  //     <p className="text-center text-sm relative bottom-5" onClick={() => toggleMore(true)}>
  //       See details →
  //     </p>
  //   ),
  //   seeMore: ({ close }) => (
  //     <div className="w-full h-full p-10 bg-white">
  //       <h2 className="text-2xl mb-4">Wedding Details</h2>
  //       <p className="underline cursor-pointer" onClick={close}>
  //         Back to story
  //       </p>
  //     </div>
  //   ),
  //   duration: 1000
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
