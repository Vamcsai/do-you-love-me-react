import { createContext, useEffect, useState } from "react";

export const ImageContext = createContext();

export default function ImageContextProvider({ children }) {
  const [currentImageType, setCurrentImageType] = useState("question");
  const [currentImage, setCurrentImage] = useState("");
  useEffect(() => {
    switch (currentImageType) {
      case "question":
        setCurrentImage(String(require("../utils/question.gif")));
        break;
      case "yes":
        setCurrentImage(String(require("../utils/yes.gif")));
        break;
      case "no":
        setCurrentImage(String(require("../utils/no.gif")));
        break;
      case "please1":
        setCurrentImage(String(require("../utils/please1.gif")));
        break;
      case "please2":
        setCurrentImage(String(require("../utils/please2.gif")));
        break;
      case "please3":
        setCurrentImage(String(require("../utils/please3.gif")));
        break;
      case "please4":
        setCurrentImage(String(require("../utils/please4.gif")));
        break;
      case "please5":
        setCurrentImage(String(require("../utils/please5.gif")));
        break;
      default:
        setCurrentImage(String(require("../utils/question.gif")));
    }
  }, [currentImageType]);
  return (
    <ImageContext.Provider
      value={{
        currentImageType,
        setCurrentImageType,
        currentImage,
        setCurrentImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
