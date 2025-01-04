import "./App.css";
import Banner from "./components/Banner/Banner";
import BannerTwo from "./components/BannerTwo/BannerTwo";
import Navbar from "./components/Navbar/Navbar";
import OilProduct from "./components/oilProduct/oilProduct";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <BannerTwo />
      <OilProduct />
    </>
  );
}

export default App;
