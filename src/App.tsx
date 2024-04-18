import { Route, Routes } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Essentials from "./pages/Essentials/Essentials";
import AlertInformation from "./pages/AlertInformation/AlertInformation";
import FAQ from "./pages/FAQ/FAQ";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

export default function App() {
  return (
    <div className="app_container">
      <div className="app_container__blue_line"></div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/docs" element={<Home></Home>}></Route>
        <Route path="/docs/essentials" element={<Essentials></Essentials>}></Route>
        <Route path="/docs/alerts" element={<AlertInformation></AlertInformation>}></Route>
        <Route path="/docs/faqs" element={<FAQ></FAQ>}></Route>
        <Route path="/privacy" element={<Privacy></Privacy>}></Route>
        <Route path="/terms" element={<Terms></Terms>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
