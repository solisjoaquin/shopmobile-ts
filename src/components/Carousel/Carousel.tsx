import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default function DemoCarousel() {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      stopOnHover={false}
    >
      <div>
        <img src="https://assets.stickpng.com/thumbs/5906078f0cbeef0acff9a645.png" />
        <p className="newlegend">Agregar al carrito</p>
      </div>
      <div>
        <img src="https://assets.stickpng.com/images/588248e0e81acb96424ffab1.png" />
        <p className="newlegend">Agregar al carrito</p>
      </div>
      <div>
        <img src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4134.png" />
        <p className="newlegend">Agregar al carrito</p>
      </div>

      <div>
        <img src="https://assets.stickpng.com/thumbs/58824a63e81acb96424ffab5.png" />
        <p className="newlegend">Agregar al carrito</p>
      </div>

      <div>
        <img src="https://assets.stickpng.com/thumbs/58824aabe81acb96424ffab6.png" />
        <p className="newlegend">Agregar al carrito</p>
      </div>

      <div>
        <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c1a8.png" />
        <p className="newlegend">Agregar al carrito</p>
      </div>
    </Carousel>
  );
}
