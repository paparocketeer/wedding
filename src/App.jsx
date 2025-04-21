import Stories from "react-insta-stories";

import "@/App.css";
import ParkingComponent from "@/components/Parking";

export default function AppComponent() {
  const stories = [
    "images/1.png",
    {
      url: "images/2.png",
      seeMore: () => {
        window.location.replace("https://goo.gl/maps/LSN98yg3uEXQZT278");
      },
    },
    {
      content: () => ParkingComponent(),
    },
    {
      content: () => (
        <div style={{ margin: 20 }}>
          <img src="images/chinchin_route.jpg" style={{ width: "100%" }} />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Stories
        id="stories"
        stories={stories}
        defaultInterval={5000}
        width={432}
        height="100vh"
        loop={true}
      />
    </div>
  );
}
