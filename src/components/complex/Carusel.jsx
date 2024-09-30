
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styling/Carusel.css"

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carusel-container">
      <Slider {...settings}>
        <div>
          <img
            src="../../../imagini/A1.jpg"
            alt="Slide 1"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="../../../imagini/a2.jpg"
            alt="Slide 2"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="../../../imagini/a3.jpg"
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="../../../imagini/a4.jpg"
            alt="Slide 4"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="../../../imagini/ab1.1.jpg"
            alt="Slide 5"
            style={{ width: "100%" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carusel;