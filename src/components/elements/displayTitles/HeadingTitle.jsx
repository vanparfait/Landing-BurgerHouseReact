import PropTypes from "prop-types";

const HeadingTitle = ({ children, variant }) => {
  const classDefault = "uppercase font-blod bg-primary px-7 py-3 inline-block";
  switch (variant) {
    case "h3":
      return (
        <div className="flex items-center justify-center my-5">
          <h3 className={`${classDefault} text-sm`}>{children}</h3>
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center my-5">
          <h2 className={`${classDefault} text-lg`}>{children}</h2>
        </div>
      );
  }
};

HeadingTitle.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired,
};

export default HeadingTitle;
