import PropTypes from "prop-types";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useSelector } from "react-redux";

const Services = ({ category }) => {
  const services = useSelector((state) => state.services);

  return (
    <div>
      {services.map((service) => {
        if (service.category === category) {
          return <ServiceCard service={service} key={service.id} />;
        }
      })}
    </div>
  );
};

Services.propTypes = {
  category: PropTypes.string.isRequired,
};
export default Services;
