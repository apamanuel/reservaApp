import PropTypes from "prop-types";

const ProgressBar = ({ completed }) => {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#F0F1F2",
    marginBottom: "30px",
  };
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#1BA68C",
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
};

export default ProgressBar;
