import Container from "../../elements/Container";
import Heading from "../../elements/displayTitles/Heading";
import HeadingBurgerImg from "../../elements/displayTitles/HeadingBurgerImg";
import HeadingTitle from "../../elements/displayTitles/HeadingTitle";

const Products = () => {
  return (
    <Container>
      <HeadingTitle variant="h3">toujours des delicieux burgers</HeadingTitle>
      <Heading
        theme="primary"
        alignement="center"
        className="my-5 text-primary"
      >
        CHOISISSEZ ET SAVOUREZ
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        mollitia dolorem praesentium iure cum tempora natus quia fugit eligendi
        veritatis a voluptatibus, sapiente odit, corporis optio facere voluptas
        perferendis cupiditate maxime iste.
      </p>
      <HeadingBurgerImg />
    </Container>
  );
};

export default Products;
