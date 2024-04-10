import { useState } from "react";
import PropTypes from "prop-types";
import style from "./Accordion.module.css";
import Services from "../../components/Services/Services";

const Accordion = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.container}>
      <div onClick={() => setIsOpen(!isOpen)} className={style.titleContainer}>
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
};
export default Accordion;
