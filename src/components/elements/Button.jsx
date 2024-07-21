import PropTypes from "prop-types";
const Button = ({ titre, className, color, theme }) => {
  let background;
  if (color === "secondary") {
    background = "bg-secondary hover:bg-secondaryHover";
  } else if (color === "danger") {
    background = "bg-redPrimary hover:bg-redPrimaryHover";
  } else {
    background = "bg-primary hover:bg-primaryHover";
  }

  switch (theme) {
    case "small":
      return (
        <button
          className={`${className} ${background}  px-4 py-2 mx-2 mt-5 uppercase shadow-xl text-white text-xs font-medium animate`}
        >
          {titre}
        </button>
      );
    case "big":
      return (
        <button
          className={`${className} ${background}  px-8 py-4 mx-2 mt-5 uppercase shadow-xl text-white text-base font-medium animate`}
        >
          {titre}
        </button>
      );
    default:
      return (
        <button
          className={`${className} ${background}  px-4 py-3 mx-2 mt-5 uppercase shadow-xl text-white text-sm font-medium animate`}
        >
          {titre}
        </button>
      );
  }
};

Button.propTypes = {
  className: PropTypes.node.isRequired,
  titre: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
  theme: PropTypes.node.isRequired,
};

export default Button;

//alt + direction pour manipuler plusieurs balise
//Ctrl+ click pour se deplacer dans un autre composant
