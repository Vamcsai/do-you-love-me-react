import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageContextProvider from "./context/ImageContext";
import MessageContextProvider from "./context/MessageContext";

function AppRouter() {
  return (
    <ImageContextProvider>
      <MessageContextProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </MessageContextProvider>
    </ImageContextProvider>
  );
}

export default AppRouter;
