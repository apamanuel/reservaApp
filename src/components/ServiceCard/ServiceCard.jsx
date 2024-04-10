import PropTypes from "prop-types";
import style from "./ServiceCard.module.css";

const ServiceCard = ({ service }) => {
  return (
    <div className={style.container}>
      <p className={style.name}>{service.name}</p>
      <p className={style.description}>{service.description}</p>
      <div className={style.buttonContainer}>
        <button className={style.button}>Seleccionar</button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceCard;
