import PropTypes from "prop-types";
const Button = ({ titre, className }) => {
  return (
    <button
      className={`${className}  px-4 py-3 mx-2 mt-5 uppercase shadow-xl text-white tracking-widest text-sm font-medium animate`}
    >
      {titre}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.node.isRequired,
  titre: PropTypes.node.isRequired,
};

export default Button;
