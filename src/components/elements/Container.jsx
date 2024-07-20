import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="max-w-6xl h-full m-auto"> {children} </div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

/////4xl
