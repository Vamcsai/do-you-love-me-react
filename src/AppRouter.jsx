import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageContextProvider from "./context/ImageContext";
import MessageContextProvider from "./context/MessageContext";

function AppRouter() {
  return (
    <ImageContextProvider>
      <MessageContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MessageContextProvider>
    </ImageContextProvider>
  );
}

export default AppRouter;
