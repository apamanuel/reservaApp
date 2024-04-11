import Accordion from "../../components/Accordion/Accordion";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getServices } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);

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
