import Produit from "../../../assets/images/HeroTop/burger-hero-top.png";
import bgFood from "../../../assets/images/background/bg-food.jpg";
import Button from "../../elements/Button";
import Container from "../../elements/Container";
import Header from "./Header";

const HeroTop = () => {
  return (
    <div className="bg-primary w-full">
      <div
        className="bg-repeat w-full h-full pb-40"
        style={{ backgroundImage: `url(${bgFood})` }}
      >
        <Container>
          <Header />
          <div className=" relative w-full mt-28">
            <img
              src={Produit}
              alt="un menu hamburger avec frites et coca-cola"
              className="absolute -top-64 right-0 w-6/12 z-0"
            />
            <div className="text-secondary uppercase relative z-10">
              <h1 className="mb-4 font-semibold">
                {" "}
                C&apos;est le moment de gouter au bon gout des hamburgers.
              </h1>
              <h2 className="font-secondary">
                <span className="text-8xl block">Burger</span>{" "}
                <span className="text-6xl mr-3">House</span>
                <span className="text-4xl">
                  Click<span className="text-redPrimary">&</span>Collect
                </span>
              </h2>
            </div>
          </div>
          <Button
            titre="Creer mon compte"
            color="secondary"
            theme="big"
            className="mt-5"
          />
        </Container>
      </div>
    </div>
  );
};

export default HeroTop;
