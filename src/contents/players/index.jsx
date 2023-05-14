import React from "react";

// Data
import { playersData } from "../../config";

// Components
import { Slider } from "../../components";

// Utils
import { getDetailContentOrderNumber } from "../../utils";

const PlayersContent = () => {

  return (
    <section className="players-container">
      <h1 className="players-container__text-title">{playersData.title}</h1>
      <div className="players-container__image-background"/>
      <ul className="players-container__details-content">
        { playersData?.details.map((item,index) => (
          <li className="detail-container" id={`${item?.title}-content`} key={item?.title}>
            <div className="detail-container__title-group">
              <p className="detail-container__title-group__order-number">{getDetailContentOrderNumber(index)}</p>
              <h3 className="detail-container__title-group__text-title">{item.title}</h3>
            </div>
            <p className="detail-container__text-description">{item.description}</p>
          </li>
        )) }
      </ul>
      <Slider contentData={playersData.details} className="players-container__slider-container" />
    </section>
  );
};

export default PlayersContent;
