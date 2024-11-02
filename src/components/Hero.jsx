import { curve, heroBackground, mageseekergaren, robot } from "../assets";
import Section from "./Section";
import Button from "./Button";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Coaching by rank 1 Garen!
            <span className="inline-block relative">
              Erislash{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Get coached by the best of the best, book your session now.
          </p>
          <Button href="/pricing" white>
            Book now
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 roundend-t-[o.9rem]" />
              <div className="aspect-[33/40] roundend-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* Storlekar och grejer för Hero ramen raden över detta*/}
                <img
                  src={mageseekergaren}
                  className="w-full"
                  width={1024}
                  height={490}
                  alt="1stGaren"
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:-w-[138%] lg:-top-[104%]">
            {/*Bakgrundsbild till 1stGaren hero. Skippar en hel del typ 1 timme o 5 min in där det bara är om rörande bollar och ringar.
            Jag skippade även en nmp install, npm install*/}
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </Section>
  ); /*12rem bestämmer hur lång ner texten är, tror erislash */
};

export default Hero;
