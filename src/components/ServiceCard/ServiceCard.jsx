import PropTypes from "prop-types";
import style from "./ServiceCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectedService } from "../../redux/actions";

const ServiceCard = ({ service }) => {
  const dispatch = useDispatch();

  const handlerButton = (id) => {
    dispatch(selectedService(id));
  };

  const serviceSelected = useSelector((state) => state.selectedService);

  return (
    <div className={style.container}>
      <p className={style.name}>{service.name}</p>
      <p className={style.description}>{service.description}</p>
      <div className={style.buttonContainer}>
        {serviceSelected != service.id ? (
          <button
            className={style.button}
            onClick={() => handlerButton(service.id)}
          >
            Seleccionar
          </button>
        ) : (
          <button className={style.button}>Seleccionado</button>
        )}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceCard;
