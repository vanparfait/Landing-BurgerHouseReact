import Container from "../../elements/Container";
import Assiette from "../../../assets/images/background/Assiette-burger-frites.png";
import Burger from "../../../assets/images/background/Burger.png";
import Sauce from "../../../assets/images/background/Sauce-pimente.png";
import Heading from "../../elements/displayTitles/Heading";

const Booking = () => {
  return (
    <Container>
      <div className="relative mb-25">
        <img
          src={Burger}
          alt="un hambrurger"
          className="absolute -top-20 -left-36 z-10"
        />
        <img
          src={Sauce}
          alt="une sauce pimentee"
          className="absolute bottom-0 left-0"
        />
        <img
          src={Assiette}
          alt="une assiette d'hamburgers et de frites"
          className="absolute -bottom-28 -right-80"
        />
        <div className="max-w-3xl mx-auto px-10 py-20">
          <Heading variant="h3" alignement="center" className="uppercase">
            Reservation
          </Heading>
          <Heading
            alignement="center"
            theme="secondary"
            className="mt-5 uppercase"
          >
            Reservez votre table
          </Heading>
          <form action="" className="grid grid-cols-2 gap-x-7 gap-y-6 mt-20">
            <div>
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                name="nom"
                id="nom"
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="mail">Email</label>
              <input
                type="mail"
                name="mail"
                id="mail"
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="JohnDoe@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="time">Heure</label>
              <input
                type="time"
                name="time"
                id="time"
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="client">Nombre de personnes</label>
              <input
                type="number"
                name="client"
                id="client"
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="7"
              />
            </div>
            <div>
              <label htmlFor="repas" className="invisible">
                Trouvez une table
              </label>
              <input
                name="repas"
                type="button"
                value={" Trouvez une table"}
                className="bg-redPrimary hover:bg-redPrimary w-full text-white font-secondary text-center tracking-widest uppercase py-5 rounded-md animate cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
