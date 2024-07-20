import Produit from "../../../assets/images/HeroTop/burger-hero-top.png";
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
          <div className="bg-gray-500 w-full flex items-center">
            <div className="text-secondary text-xl w-2/3 uppercase">
              <h1 className="mb-7">
                {" "}
                C&apos;est le moment de gouter au bon gout des hamburgers.
              </h1>
              <h2 className="font-secondary">
                <span className="text-8xl block">Burger</span>{" "}
                <span className="text-6xl mr-3">House</span>
                <span className="text-4xl">Click&Collect</span>
              </h2>
            </div>
            <div className="w-1/3">
              <img
                src={Produit}
                alt="un menu hamburger avec frites et coca-cola"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroTop;
