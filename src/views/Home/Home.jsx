import Accordion from "../../components/Accordion/Accordion";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Home = () => {
  return (
    <div>
      <div>
        <h3>Seleccionar servicio</h3>
      </div>
      <div>
        <ProgressBar completed={20} />
      </div>
      <div>
        <Accordion category="Manos y Pies">
          <p>Esculpido (Solo en 1 una)</p>
        </Accordion>
      </div>
    </div>
  );
};

export default Home;
