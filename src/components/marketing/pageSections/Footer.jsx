import Container from "../../elements/Container";
import BackgroundImage from "../../../assets/images/background/bg-footer.jpg";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="relative text-white mb-20 p-5">
          <img
            src={BackgroundImage}
            alt="Un plan de travail de cuisine"
            className="absolute bg-black top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className=" grid grid-cols-2 relative bg-yellow-400 z-10 h-96">
            <div className="bg-red-200"></div>
            <div className="bg-orange-300">
              <div className="flex items-center">
                <MapPinIcon className="h-10 w-10 mr-5" />
                <span>15 places bellecour, 6900 lyon</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>info@burger.house.com</span>
              </div>
            </div>
          </div>
          <div className="relative bg-red-400 z-10 h-10"></div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
