import PropTypes from "prop-types";

const Heading = ({ children, theme, display, variant }) => {
  const classDefault = "uppercase mt-5";
  let font, color;
  switch (theme) {
    case "secondary":
      font = "font-secondary";
      break;
    default:
      font = "tracking tighter";
  }

  switch (display) {
    case "gray":
      color = "text-gray-600";
      break;
    default:
      color = "text-secondary";
  }

  switch (variant) {
    case "h3":
      return (
        <div className="flex items-center justify-center my-5">
          <h3 className={`${classDefault} ${font} ${color} text-2xl`}>
            {children}
          </h3>
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center my-5">
          <h2
            className={`${
              theme === "secondary" ? "text-5xl" : "text-3xl"
            }  ${classDefault} ${font} ${color} `}
          >
            {children}
          </h2>
        </div>
      );
  }
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired,
  theme: PropTypes.node.isRequired,
};

export default Heading;
