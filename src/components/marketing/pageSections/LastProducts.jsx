import Container from "../../elements/Container";
import Product1 from "../../../assets/images/products/LastProducts-1.jpg";
import Product2 from "../../../assets/images/products/LastProducts-2.jpg";
import Product3 from "../../../assets/images/products/LastProducts-3.jpg";

const LastProducts = () => {
  return (
    <Container>
      <div className="w-full my-20 px-11 h-96 grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-9 text-white uppercase">
        <div className="bg-primary roundend-md h-full row-span-2 p-7 relative">
          <img
            src={Product1}
            alt="un hamburger tres bon pose sur la table"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          />
          <div className="z-10 relative">
            <span className="block font-bold text-xg">killer burger</span>
            <span className=" text-2xl font-black">
              burger le plus populaire
            </span>
          </div>
        </div>
        <div className="bg-primary roundend-md h-full p-7 relative">
          <img
            src={Product2}
            alt="dex hamburgers tres bon pose sur la table"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          />
          <div className="z-10 relative">
            <span className="block font-bold text-xg">island burger</span>
            <span className="block text-2xl font-black">plus de plaisir</span>
            <span className="">plus de gout</span>
          </div>
        </div>
        <div className="bg-primary roundend-md h-full p-7 relative">
          <img
            src={Product3}
            alt="un hamburger tres bon pose sur la table"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          />
          <div className="z-10 relative">
            <span className="block font-bold text-xg">
              orlando&apos;s burger
            </span>
            <span className=" text-2xl font-black">frais & pimente</span>
          </div>
        </div>
      </div>
      ;
    </Container>
  );
};

export default LastProducts;
