import { benefits } from "../constants";
import Section from "./Section";

const BenefitDescriptions = () => {
  return (
    <Section id="benefit-descriptions">
      <div className="container relative z-2">
        {benefits.map((item) => (
          <div key={item.id} id={`benefit-${item.id}`} className="mb-10">
            <h2 className="h2">{item.title}</h2>
            <p className="body-2">
              {/* Replace this with the full description for each benefit */}
              Detailed explanation about {item.fullText}.
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BenefitDescriptions;
