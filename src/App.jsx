import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BenefitDescriptions from "./components/BenefitsDescription";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <BenefitDescriptions />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
