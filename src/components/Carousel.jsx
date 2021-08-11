import { useState } from "react";
import "./../scss/carousel.scss";
import { slides } from "./../shared/slides.js";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    if (way === "left")
     	setCurrentSlide(currentSlide > 0 ? (currentSlide - 1) : 2);
    else 
    	setCurrentSlide(currentSlide < (slides.length - 1) ? (currentSlide + 1) : 0);
  };
  
  return (
    <div className="carousel" id="carousel">
      <div className="carousel__slide" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
        {slides.map((slide) => (
          <div key = {slide.id} className="container">
	            <div className="carousel__item">

	              	<div className="carousel__header">
	                	<div className="container-fluid">

	                  		<div className="carousel__img">
	                    		<img src={slide.icon} alt="" />
	                  		</div>

		                  	<h2>{slide.title}</h2>
		                  	<p>{slide.desc}</p>
		                  	<span>Projects</span>
	                	</div>
	              	</div>

              		<div className="carousel__content">
               		 	<img src={slide.img} alt="" />
              		</div>
            	</div>
          </div>
        ))}
      </div>

      <img src="assets/arrow.png" className="carousel__arrow carousel__arrow--left"
        alt="" onClick={() => handleClick("left")} />

      <img src="assets/arrow.png" className="carousel__arrow carousel__arrow--right"
        alt="" onClick={() => handleClick()} />

    </div>
  );
}