import "./App.css";
import { Timestamps } from "./components/timestamps";
import { ModeToggle } from "./components/theme/mode-toggle";
import VideoPlayer from "./components/videoplayer";
import Title from "./components/title";
import InfoWindow from "./components/infoWindow";

const App = () => {
  return (
    <div className="container flex flex-col">
      <div className="absolute bottom-0 left-0 p-4">
        <ModeToggle />
      </div>
      <div className="p-2 flex justify-center items-center top-0 absolute">
        <Title />
      </div>
      <div className="">
        <div className="top-0 left-0 p-4 flex">
          <VideoPlayer />
          <div className="w-80">
            <Timestamps />
          </div>
          <div className="w-90">
            <InfoWindow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
