import PropTypes from "prop-types";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import NavBar from "../components/NavBar/NavBar";

const Layout = ({ children, title, progress }) => {
  return (
    <>
      <h2>{title}</h2>
      <ProgressBar completed={progress} />
      <main>{children}</main>
      <NavBar />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Layout;
