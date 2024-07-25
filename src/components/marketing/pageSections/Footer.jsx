import Container from "../../elements/Container";
import BackgroundImage from "../../../assets/images/background/bg-footer.jpg";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Logo from "../../../assets/svg/logo/Logo-burger-house-white.svg";
import Facebook from "../../../assets/svg/icones/facebook-f-brands-solid.svg";
import Instagran from "../../../assets/svg/icones/instagram-brands-solid.svg";
import Twitter from "../../../assets/svg/icones/twitter-brands-solid.svg";
import Whatsapp from "../../../assets/svg/icones/whatsapp-brands-solid.svg";
import { Link } from "react-router-dom";

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
          <div className=" grid grid-cols-2 relative z-10 h-96">
            <div className=" w-full mb-28 p-5 mt-20">
              <img src={Logo} alt="Logo burger house" className="w-2/3 " />
              <p className="mt-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                alias laborum sunt iure, rem assumenda! Ut fugiat ullam totam
                nobis dicta tempore quam dignissimos quo est ducimus. Dolor,
                modi tenetur.rem assumenda! Ut fugiat ullam totam.
              </p>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center">
              <div className="flex items-center">
                <MapPinIcon className="h-10 w-10 mr-5" />
                <span className="uppercase tracking-widest font-extrabold text-lg">
                  15 places bellecour, 6900 lyon
                </span>
              </div>

              <div className="flex items-center mr-20 mt-5">
                <EnvelopeIcon className="h-10 w-10 mr-5" />
                <span className="uppercase tracking-widest font-extrabold text-lg">
                  info-burger.house.com
                </span>
              </div>
            </div>
          </div>
          <div className="relative z-10  flex items-center justify-between">
            <div className="uppercase font-extrabold tracking-tighter text-sm">
              @ Burger house 2021. All rights reserved.
            </div>
            <div className="flex">
              <div>
                <Link to="https://facebook.com">
                  <img
                    src={Facebook}
                    alt="logo de Facebook"
                    className="w-8 mr-3 h-7 bg-white rounded-full p-1  hover:bg-gray-400 animate"
                  />
                </Link>
              </div>
              <div>
                <Link to={"https://twitter.com"}>
                  <img
                    src={Twitter}
                    alt="logo de Twitter"
                    className="w-8 mr-3 h-7 bg-white rounded-full p-1  hover:bg-gray-400 animate"
                  />
                </Link>
              </div>
              <div>
                <Link to={"https://instagram.com"}>
                  <img
                    src={Instagran}
                    alt="logo de Instagram"
                    className="w-8 mr-3 h-7 bg-white rounded-full p-1 hover:bg-gray-400 animate"
                  />
                </Link>{" "}
              </div>
              <div>
                <Link to={"https://whatsapp.com"}>
                  <img
                    src={Whatsapp}
                    alt="logo de Whatsapp"
                    className="w-8 mr-3 h-7 bg-white rounded-full p-1  hover:bg-gray-400 animate"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
