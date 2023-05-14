import React from "react";

// Data
import { athletesData } from "../../config";

// Components
import { Slider } from "../../components";

// Utils
import { getDetailContentOrderNumber } from "../../utils";

const AthletesContent = () => {

  return (
    <section className="athletes-container">
      <h1 className="athletes-container__text-title">{athletesData?.title}</h1>
      <div className="athletes-container__image-background"/>
      <ul className="athletes-container__details-content">
        { athletesData?.details.map((item,index) => (
          <li className="detail-container" id={`${item?.title}-content`} key={item?.title}>
            <div className="detail-container__title-group">
              <p className="detail-container__title-group__order-number">{getDetailContentOrderNumber(index)}</p>
              <h3 className="detail-container__title-group__text-title">{item.title}</h3>
            </div>
            <p className="detail-container__text-description">{item.description}</p>
          </li>
        )) }
      </ul>
      <Slider contentData={athletesData.details} className="athletes-container__slider-container" />
    </section>
  );
};

export default AthletesContent;
