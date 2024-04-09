import { Route, Routes } from "react-router-dom";
import Landing from "../src/views/Landing/Landing";
import Home from "../src/views/Home/Home";
import NotFound from "./views/Not found/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
