import { offer } from "../../assets/images";
import Button from "../../components/Button";
import {arrowRight} from "../../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center justify-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-1">
        <img
          src={offer}
          alt="Offer Image"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className=" font-palanquin text-4xl capitalized font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redifines your experience with
          unbeatable deals. from premier selections to incredible savings, we
          offer a wide range of products and services to cater to your every
          need.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities with our special offer. We are
          committed to providing you with the best deals and services that will
          leave you coming back for more.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" icon={arrowRight} />
          <Button label="Learn More" bgColor="bg-white" borderColor="border-slate-gray"
          textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
