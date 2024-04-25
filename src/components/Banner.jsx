import { Carousel } from "@material-tailwind/react";
// import banner1 from "../assets/Banner/remove1.png";
import banner1 from "../assets/Banner/m1.jpg";
// import banner2 from "../assets/Banner/remove2.png";
import banner2 from "../assets/Banner/m2.jpg";
// import banner3 from "../assets/Banner/remove3.png";
import banner3 from "../assets/Banner/m3.jpg";

const Banner = () => {
  return (
    <div className="p-3">
      <Carousel
        autoplayDelay={3000}
        loop={true}
        autoplay={true}
        className="w-full mx-auto my-0 rounded md:w-3/6"
        // transition={{ type: "tween", duration: 1 }}
      >
        {/* <div className="w-full"> */}
        <img src={banner1} alt="banner1" className="h-full" />
        {/* </div> */}
        {/* <div className="w-full"> */}
        <img src={banner2} alt="banner1" className="h-full" />
        {/* </div> */}
        {/* <div className="w-full"> */}
        <img src={banner3} alt="banner1" className="h-full" />
        {/* </div> */}
      </Carousel>
    </div>
  );
};

export default Banner;
