import Accordion from "../../components/Accordion/Accordion";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmService } from "../../redux/actions";

const SelectService = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const selectedService = useSelector((state) => state.selectedService);

  const HandlerSelect = () => {
    dispatch(confirmService());
  };

  const [openAccordion, setOpenAccordion] = useState(null);
  return (
    <div>
      <div>
        <h2>Seleccionar servicio</h2>
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
      <div>
        {selectedService && (
          <button onClick={() => HandlerSelect()}>Siguiente</button>
        )}
      </div>
    </div>
  );
};

export default SelectService;
