import Image from "next/image";
import Card from "./Card";
import desktopImage from "../../../images/pattern-bg-desktop.png";
const Hero = () => {
  return (
    <div className="h-100 m-0">
      <Image
        alt="background image"
        src={desktopImage}
        sizes="100vw"
        quality={100}
        className="bg-cover bg-top w-full "
        style={{
          objectFit: "cover",
        }}
      />

      <div className="absolute inset-x-1/4 top-24 w-1/2 pt-3  ">
        <h1 className=" flex justify-center text-4xl  text-white leading-5 font-sans mb-3 pb-6 mr-12">
          IP Adress Tracker{" "}
        </h1>
        <input
          placeholder="Search for any IP Adress"
          className="w-3/4 h-12 rounded-lg p-2 mx-auto ml-24"
        />
      </div>
    </div>
  );
};

export default Hero;
