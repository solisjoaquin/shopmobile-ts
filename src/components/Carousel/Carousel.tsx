import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import SelectAmount from "../SelectAmount/SelectAmount";

export default function DemoCarousel() {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      stopOnHover={false}
      autoPlay={false}
      interval={3000000}
    >
      <div>
        <img
          alt="burguer"
          src="https://assets.stickpng.com/images/588248e0e81acb96424ffab1.png"
        />
        <SelectAmount />
        <p className="newlegend">Agregar al carrito</p>
      </div>
      <div>
        <img
          alt="burguer"
          src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4134.png"
        />
        <SelectAmount />
        <p className="newlegend">Agregar al carrito</p>
      </div>

      <div>
        <img
          alt="burguer"
          src="https://assets.stickpng.com/images/588248e0e81acb96424ffab1.png"
        />
        <SelectAmount />
        <p className="newlegend">Agregar al carrito</p>
      </div>
      <div>
        <img
          alt="burguer"
          src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4134.png"
        />
        <SelectAmount />
        <p className="newlegend">Agregar al carrito</p>
      </div>
    </Carousel>
  );
}
