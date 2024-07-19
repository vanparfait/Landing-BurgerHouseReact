import Logo from "../../../assets/svg/logo/Logo-burger-house.svg";

const Header = () => {
  return (
    <div className=" flex items-center justify-between py-10">
      <div className="bg-red-500 h-20 w-full">
        <img src={Logo} alt="burger-house" className="w-64" />
      </div>
      <div className="bg-green-500 h-20 w-full"></div>
    </div>
  );
};

export default Header;
