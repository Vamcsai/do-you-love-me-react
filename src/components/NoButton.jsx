import { useContext, useEffect, useState } from "react";
import "../styles/Button.scss";
import { ImageContext } from "../context/ImageContext";
import { MessageContext } from "../context/MessageContext";

function NoButton() {
  let noButton = null;
  const [hoverCount, setHoverCount] = useState(0);
  const { setCurrentImageType } = useContext(ImageContext);
  const { setMessageContentType } = useContext(MessageContext);

  useEffect(() => {
    if (document.getElementById("no-button")) {
      noButton = document.getElementById("no-button");
    }
  });

  useEffect(() => {
    if (hoverCount > 4) {
      noButton.style.position = "relative";
      noButton.style.top = null;
      noButton.style.left = null;
    }
    switch (hoverCount) {
      case 0:
        break;
      case 1:
        setCurrentImageType("please1");
        setMessageContentType("please1");
        break;
      case 2:
        setCurrentImageType("please2");
        setMessageContentType("please2");
        break;
      case 3:
        setCurrentImageType("please3");
        setMessageContentType("please3");
        break;
      case 4:
        setCurrentImageType("please4");
        setMessageContentType("please4");
        break;
      default:
        setCurrentImageType("please5");
        setMessageContentType("please5");
        break;
    }
  }, [hoverCount]);

  function getRandomInt() {
    const int = Math.floor(Math.random() * (80 - 10 + 1) + 10);
    return int <= 20 || int >= 75 ? int : getRandomInt();
  }

  const handleOnMouseOver = () => {
    if (hoverCount <= 4) {
      setHoverCount((hoverCount) => hoverCount + 1);
      noButton.style.position = "absolute";
      noButton.style.top = getRandomInt() + "%";
      noButton.style.left = getRandomInt() + "%";
    }
  };

  return (
    <div className="button" id="no-button" onMouseOver={handleOnMouseOver}>
      <div
        className="button-style"
        onClick={() => {
          setCurrentImageType("no");
          setMessageContentType("no");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }}
      >
        No
      </div>
    </div>
  );
}
export default NoButton;
