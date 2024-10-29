import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Resedencies.css";
// import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

import r1 from '../../Images/r1.png';
import r2 from '../../Images/r2.png';
import r3 from '../../Images/r3.png';

const data = [
  { name: "Aliva Priva Jardin", price: "47,043", detail: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta", image: r1 },
  { name: "Asatti Garden City", price: "66,353", detail: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat", image: r2 },
  { name: "Citralan Puri Serang", price: "35,853", detail: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten", image: r3 },
  { name: "Aliva Priva Jardin", price: "47,043", detail: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta", image: r1 },
  { name: "Asatti Garden City", price: "66,353", detail: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat", image: r2 },
  { name: "Citralan Puri Serang", price: "35,853", detail: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten", image: r3 }
];



const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};