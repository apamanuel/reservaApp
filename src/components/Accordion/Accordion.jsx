import PropTypes from "prop-types";
import style from "./Accordion.module.css";
import Services from "../../components/Services/Services";

const Accordion = ({ title, isOpen, onToggle }) => {
  return (
    <div className={style.container}>
      <div onClick={onToggle} className={style.titleContainer}>
        <h4 className={style.title}>{title}</h4>
        {isOpen ? (
          <h2 className={style.symbol}>-</h2>
        ) : (
          <h2 className={style.symbol}>+</h2>
        )}
      </div>
      {isOpen && (
        <div>
          <Services category={title} />
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Accordion;
