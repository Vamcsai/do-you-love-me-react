import { useContext } from "react";
import "../styles/Button.scss";
import { ImageContext } from "../context/ImageContext";
import { MessageContext } from "../context/MessageContext";

function YessButton() {
  const { setCurrentImageType } = useContext(ImageContext);
  const { setMessageContentType } = useContext(MessageContext);
  return (
    <div className="button">
      <div
        className="button-style"
        onClick={() => {
          setCurrentImageType("yes");
          setMessageContentType("yes");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }}
      >
        Yes
      </div>
    </div>
  );
}

export default YessButton;
