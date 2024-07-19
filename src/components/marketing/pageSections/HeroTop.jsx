import bgFood from "../../../assets/images/background/bg-food.jpg";
import Container from "../../elements/Container";
import Header from "./Header";

const HeroTop = () => {
  return (
    <div className="bg-primary w-full h-screen">
      <div
        className="bg-repeat w-full h-full"
        style={{ backgroundImage: `url(${bgFood})` }}
      >
        <Container>
          <Header />
        </Container>
      </div>
    </div>
  );
};

export default HeroTop;
