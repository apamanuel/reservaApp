import Accordion from "../../components/Accordion/Accordion";

const Home = () => {
  return (
    <div>
      <div>
        <h3>Seleccionar servicio</h3>
      </div>
      <div>
        <h4>Progress bar</h4>
      </div>
      <div>
        <Accordion title="Manos y Pies">
          <p>Esculpido (Solo en 1 una)</p>
          <p>Esculpido (Solo en 1 una)</p>
        </Accordion>
      </div>
    </div>
  );
};

export default Home;
