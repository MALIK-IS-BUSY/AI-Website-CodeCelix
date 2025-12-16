import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
         

      </Routes>
    </>
  );
}

export default App;
