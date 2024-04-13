import Accordion from "../../components/Accordion/Accordion";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmService } from "../../redux/actions";
import Layout from "../../views/Layout";

const SelectService = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const selectedService = useSelector((state) => state.selectedService);

  const HandlerSelect = () => {
    dispatch(confirmService(true));
  };

  const [openAccordion, setOpenAccordion] = useState(null);
  return (
    <Layout title="Seleccionar servicio" progress={20}>
      <div>
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
          {Object.keys(selectedService).length != 0 && (
            <button onClick={HandlerSelect}>Siguiente</button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SelectService;
