import Container from "../../elements/Container";
import Heading from "../../elements/displayTitles/Heading";
import HeadingBurgerImg from "../../elements/displayTitles/HeadingBurgerImg";
import HeadingTitle from "../../elements/displayTitles/HeadingTitle";

const Products = () => {
  return (
    <Container>
      <HeadingTitle variant="h3">toujours des delicieux burgers</HeadingTitle>
      <Heading variant="h3" theme="secondary" display="gray">
        choisissez et savourez
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
