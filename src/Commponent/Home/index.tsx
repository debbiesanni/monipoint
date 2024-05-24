import Analytics from "./analysis";
import Efficiency from "./efficiency";
import Footer from "./footer";
import GetStarted from "./getStarted";
import HeroSection from "./heroSection";
import TurningData from "./turningData";
import YourData from "./yourData";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Analytics />
      <Efficiency />
      <TurningData />
      <YourData />
      <GetStarted/>
      <Footer/>
    </>
  );
};

export default HomePage;





