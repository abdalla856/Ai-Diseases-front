
import Prediction from "./components/Prediction/Prediction";

import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<main>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/prediction" element={<Prediction/>}/>
  </Routes>
  </BrowserRouter>
</main>
  );
}

export default App;
