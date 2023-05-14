import { useRef,useEffect } from "react";
import Slider from "react-slick";

// Hooks
import { useMediaQuery } from "../../hooks";

// Utils
import { getDetailContentOrderNumber } from "../../utils";

const SliderComponent = ({ className = "",contentData = [] }) => {
  // Config
  const sliderConfigs = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  // Ref
  const sliderRef = useRef(null)

  // Hooks
  const matches = useMediaQuery("(max-width: 749px)");

  // Function
  const getDetailOrder = (index) => {
    return index < 10 ? `0${index}` : index;
  };

  const handleInitialSliderPosition = () => {
    if(sliderRef.current !== null) {
      sliderRef.current.slickGoTo(0,false)
    }
  }

  useEffect(() => {
    return () => handleInitialSliderPosition()
  },[matches])

  return matches ? (
    <div className={`slider-container ${className}`}>
      <div className="slider-container__content">
        <Slider ref={el => (sliderRef.current = el)} {...sliderConfigs}>
          {contentData.map((item, index) => (
            <div
              className="slider-container__content__slide-container"
              key={item.title}
            >
              <div className="slider-container__content__slide-container__title-group">
                <h5 className="slider-container__content__slide-container__title-group__order-number">
                  {getDetailContentOrderNumber(index)}
                </h5>
                <h1 className="slider-container__content__slide-container__title-group__title-text">
                  {item.title}
                </h1>
              </div>
              <p className="slider-container__content__slide-container__description">
                {item.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  ) : null
};

export default SliderComponent;
