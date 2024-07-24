import Booking from "../components/marketing/pageSections/Booking";
import Event from "../components/marketing/pageSections/Event";
import HeroTop from "../components/marketing/pageSections/HeroTop";
import LastProducts from "../components/marketing/pageSections/LastProducts";
import Products from "../components/marketing/pageSections/Products";

const HomePage = () => {
  return (
    <>
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
      <Booking />
    </>
  );
};

export default HomePage;
