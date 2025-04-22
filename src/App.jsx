//import "./styles.css";

import React from "react";
import "./App.css";
import Stories, { WithSeeMore } from "react-insta-stories";

// Import images
import profileImage from "assets/img/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg";
import locationJourneyImage from "assets/img/evelina-friman-hw_sKmjb0ns-unsplash.jpg";

class App extends React.Component {
  render() {
    return (
        <Stories
          className="stories"
          loop
          keyboardNavigation
          defaultInterval={3000}
          stories={stories2}
          onStoryEnd={(s, st) => console.log("story ended", s, st)}
          onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
          onStoryStart={(s, st) => console.log("story started", s, st)}
        />
    );
  }
}

const Story2 = ({ action, isPaused }) => {
  return (
    <div
      style={{ ...contentStyle, background: "Aquamarine", color: "#16161d" }}
    >
      <h1>Hope you like shivam's story 😄.</h1>
      {/* <p>
        Render your custom JSX by passing just a{" "}
        <code style={{ fontStyle: "italic" }}>content</code> property inside
        your story object.
      </p> */}
      {/* <p>
        You get a <code style={{ fontStyle: "italic" }}>action</code> prop as an
        input to your content function, that can be used to play or pause the
        story.
      </p> */}
      {/* <h1>{isPaused ? "Paused" : "Playing"}</h1> */}
      <h4>
        Wanna create journey stories like these. <br /> Download cube stop
        travel app 🎉
      </h4>
      {/* <p>React Native version coming soon.</p> */}
    </div>
  );
};

const stories2 = [
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
          <h1>Hey All 👋</h1>
          <h1>Check shivam's journey story.</h1>

          {/* <pre>
            <code style={code}>here they are 😄 -></code>
          </pre> */}
          <img
            style={image}
            src={profileImage}
            alt="Profile"
          ></img>
          <h4>stories creted by Cubestop travel app</h4>
        </div>
      );
    }
  },
  {
    content: ({ action, story }) => {
      return (
        <WithSeeMore story={story} action={action}>
          <div style={{ background: "pink", padding: 20 }}>
            <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
            <h1 style={{ marginTop: 5 }}>
              Here is the location journey story created for the shivam's
              journey.
            </h1>
          </div>
        </WithSeeMore>
      );
    },
    seeMoreCollapsed: ({ toggleMore, action }) => (
      <p style={customSeeMore} onClick={() => toggleMore(true)}>
        A custom See More message →
      </p>
    ),
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white"
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
    duration: 1000
  },
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStylestoryback}>
          <img style={image} src={locationJourneyImage} alt="Location journey"></img>
        </div>
      );
    }
  },
  // {
  //   content: ({ action, isPaused }) => {
  //     return (
  //       <div style={contentStylestoryback}>
  //         <img
  //           style={image}
  //           src="https://downloadwap.com/thumbs2/wallpapers/p2/2019/nature/48/c62b256713551358.jpg"
  //         ></img>
  //       </div>
  //     );
  //   }
  // },

  // {
  //   url: "https://picsum.photos/1080/1920"
  //   seeMore: ({ close }) => (
  //     <div
  //       style={{
  //         maxWidth: "100%",
  //         height: "100%",
  //         padding: 40,
  //         background: "white"
  //       }}
  //     >
  //       <h2>Just checking the see more feature.</h2>
  //       <p style={{ textDecoration: "underline" }} onClick={close}>
  //         Go on, close this popup.
  //       </p>
  //     </div>
  //   )
  // },
  // {
  //   url:
  //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  //   type: "video"
  // },
  {
    content: Story2
  }
];

const image = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: 0,
  margin: 0,
  padding: 0
};

const contentStylestoryback = {
  background: "black",
  width: "100%",
  padding: 20,
  color: "white"
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333"
};

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white"
};

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative"
};

export default App;
