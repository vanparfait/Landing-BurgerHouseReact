import bgFood from "../../../assets/images/HeroTop/burger-hero-top.png";
//import Produit from "../../../assets/images/background/bg-food.jpg";
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
          <div className="bg-gray-500 w-full h-72 flex items-center">
            <div className="bg-red-500 w-full h-full"></div>
            <div className="bg-green-500 w-full h-full">
              <img
                //src={Produit}
                alt="un menu hamburger avec frites et coca-cola"
                className="w-10 h-10"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroTop;
