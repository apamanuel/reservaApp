import Accordion from "../../components/Accordion/Accordion";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useState } from "react";

const Home = () => {
  const categories = [
    {
      id: 1,
      category: "Hands and Feet",
    },
    {
      id: 2,
      category: "Hair",
    },
    {
      id: 3,
      category: "Massage and Spa",
    },
    {
      id: 4,
      category: "Facial Care",
    },
    {
      id: 5,
      category: "Hair Removal",
    },
    {
      id: 6,
      category: "Makeup",
    },
    {
      id: 7,
      category: "Facial Care",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div>
      <div>
        <h3>Seleccionar servicio</h3>
      </div>
      <div>
        <ProgressBar completed={20} />
      </div>
      <div>
        {categories.map((category) => (
          <Accordion
            title={category.category}
            key={category.id}
            isOpen={openAccordion === category.id}
            onToggle={() =>
              setOpenAccordion(
                openAccordion === category.id ? null : category.id
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
