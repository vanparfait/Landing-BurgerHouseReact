import PropTypes from "prop-types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Product1 from "../../../assets/images/Events/product1.jpg";
import Product2 from "../../../assets/images/products/Product-2.jpg";
import Product3 from "../../../assets/images/products/Product-3.jpg";
import Container from "../../elements/Container";
import Heading from "../../elements/displayTitles/Heading";
import "../../../styles/carousel.css";

const Slide = ({ children, category, title, image }) => {
  return (
    <div className="grid grid-cols-2 p-6 w-full">
      <div className="p-10 mb-10">
        <Heading variant="h4" theme="primary">
          {category}
        </Heading>
        <Heading
          theme="secondary"
          variant="h3"
          className="mb-5 text-secondary font-bold uppercase"
        >
          {title}
        </Heading>
        <p className="tracking-wide leading-relaxed font-light text-gray-800 text-lg">
          {children}
        </p>
      </div>
      <div className="w-full h-full relative">
        <img
          src={image}
          alt="un hamburger tres bon pose sur la table"
          className="bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom rounded-md"
        />
      </div>
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Event = () => {
  const items = [
    <Slide
      key="slide1"
      image={Product1}
      category="EVENEMENT A VENIR"
      title="Vivez la demie finale"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
      exercitationem corporis aspernatur impedit nulla eveniet animi voluptate
      magnam minima explicabo quasi quaerat, mollitia velit facere voluptas quis
      dolor repellat eligendi.
    </Slide>,
    <Slide
      key="slide2"
      image={Product2}
      category="HAMBURGER ALLEMAND"
      title="Degustez avec moderation"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
      exercitationem corporis aspernatur impedit nulla eveniet animi voluptate
      magnam minima explicabo quasi quaerat, mollitia velit facere voluptas quis
      dolor repellat eligendi.
    </Slide>,
    <Slide
      key="slide3"
      image={Product3}
      category="HAMBURGER ITALIEN"
      title="Degustez avec moderation"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
      exercitationem corporis aspernatur impedit nulla eveniet animi voluptate
      magnam minima explicabo quasi quaerat, mollitia velit facere voluptas quis
      dolor repellat eligendi.
    </Slide>,
  ];

  return (
    <Container>
      <div className="shadow-2xl h-96 mb-20">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          infinite
          autoPlayInterval={4000}
          disableButtonsControls
          animationType="fadeout"
        />
      </div>
    </Container>
  );
};

export default Event;
