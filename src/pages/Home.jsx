import { useContext } from "react";
import NoButton from "../components/NoButton";
import YessButton from "../components/YessButton";
import { ImageContext } from "../context/ImageContext";
import "../styles/Home.scss";
import { MessageContext } from "../context/MessageContext";

function Home() {
  const { currentImage } = useContext(ImageContext);
  const { messageContent } = useContext(MessageContext);
  return (
    <div className="home-container">
      <div className="home-main-container">
        <div className="title">Do you like me?</div>
        <div className="content">
          <img alt="logo" height="250px" width="250px" src={currentImage} />
          <div className="message-container">{messageContent}</div>
        </div>
        <div className="button-container">
          <YessButton />
          <NoButton />
        </div>
      </div>
    </div>
  );
}

export default Home;
