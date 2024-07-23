import PropTypes from "prop-types";

const Heading = ({
  children,
  theme,
  display,
  variant,
  alignement,
  className,
}) => {
  const classDefault = "uppe";
  let font, color, align;
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

  switch (alignement) {
    case "center":
      align = "justify-center";
      break;
    case "right":
      align = "justify-end";
      break;
    default:
      align = "justify-start";
  }

  switch (variant) {
    case "h3":
      return (
        <div className={`${align} flex`}>
          <h3
            className={`${classDefault} ${className} ${font} ${color} text-2xl`}
          >
            {children}
          </h3>
        </div>
      );
    case "h4":
      return (
        <div className={`${align} flex`}>
          <h3
            className={`${classDefault} ${className} ${font} ${color} text-lg`}
          >
            {children}
          </h3>
        </div>
      );
    default:
      return (
        <div className={`${align} flex`}>
          <h2
            className={`${
              theme === "secondary" ? "text-5xl" : "text-3xl"
            }  ${classDefault} ${className} ${font} ${color} `}
          >
            {children}
          </h2>
        </div>
      );
  }
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alignement: PropTypes.node.isRequired,
};

export default Heading;
