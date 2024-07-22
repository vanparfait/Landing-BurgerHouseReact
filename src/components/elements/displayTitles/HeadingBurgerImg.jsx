import Image1 from "../../../assets/images/products/Product-1.jpg";
import Image2 from "../../../assets/images/products/Product-2.jpg";
import Image3 from "../../../assets/images/products/Product-3.jpg";
import Button from "../Button";
import Heading from "./Heading";

const HeadingBurgerImg = () => {
  return (
    <div className="grid grid-cols-3 my-20 gap-x-1 mb-20 mt-10">
      <div>
        <img
          src={Image1}
          alt="un delicieux hamburger"
          //   className="bg-primary absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex items-center justify-center flex-col px-5 pb-5">
          <Heading variant="h3">Lorem, ipsum dolor.</Heading>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            rerum.
          </p>
          <Button
            color="danger"
            className="font-secondary"
            titre=" commander"
          />
        </div>
      </div>
      <div>
        <img
          src={Image2}
          alt="un delicieux hamburger"
          //   className="bg-primary absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex items-center justify-center flex-col px-5 pb-5">
          <Heading variant="h3">Lorem, ipsum dolor.</Heading>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            rerum.
          </p>
          <Button
            color="danger"
            className="font-secondary"
            titre=" commander"
          />
        </div>
      </div>
      <div>
        <img
          src={Image3}
          alt="un delicieux hamburger"
          //   className="bg-primary absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex items-center justify-center flex-col px-5 pb-5">
          <Heading variant="h3">Lorem, ipsum dolor.</Heading>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            rerum.
          </p>
          <Button
            color="danger"
            className="font-secondary"
            titre=" commander"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingBurgerImg;
