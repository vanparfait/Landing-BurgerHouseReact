import Logo from "../../../assets/svg/logo/Logo-burger-house.svg";
import Icone from "../../../assets/svg/icones/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";

const Header = () => {
  return (
    <div className=" flex items-center justify-between py-10">
      <div className="w-full">
        <img src={Logo} alt="burger-house" className="w-64" />
      </div>
      <div className="w-full text-secondary flex items-center flex-col">
        <div className="flex items-center justify-end">
          <img src={Icone} alt="click And Collect" className="w-5 h-5 mr-2" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="flex items-center justify-end">
          <Button
            titre="Inscription"
            className={"bg-primary hover:bg-secondary"}
          />
          <Button
            titre="Connexion"
            className={"bg-secondary hover:bg-primary"}
          />

          {/* <div>ccccc</div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
