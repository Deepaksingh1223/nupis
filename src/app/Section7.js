"use client";

import { memo } from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    name: "Rodja Hartmann",
    role: "Designer, Vecurosoft",
    image: "assets/img/testimonial/testi-1-1.jpg",
    stars: 4,
  },
  {
    id: 2,
    name: "Alaxander Pall",
    role: "Designer, Vecurosoft",
    image: "assets/img/testimonial/testi-1-1.jpg",
    stars: 5,
  },
];

const Section7 = () => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button className="icon-btn">
        <i className="fa-regular fa-arrow-right"></i>
      </button>
    ),
    nextArrow: (
      <button className="icon-btn">
        <i className="fa-regular fa-arrow-left"></i>
      </button>
    ),
  };

  return (
    <section className="vs-testi__layout1 space">
      <div className="container">
        <div className="row g-5">

          {/* LEFT BANNER */}
          <div className="col-xl-5">
            <div className="banner-img">
              <img src="assets/img/others/banner1.jpg" alt="banner" />
              <div className="banner-content">
                <span className="sub-title">Best offer</span>
                <h2 className="banner-title">Save Up to $15</h2>
                <a className="vs-btn" href="shop.html">Shop Now</a>
              </div>
            </div>
          </div>

          {/* RIGHT TESTIMONIAL */}
          <div className="col-xl-7">
            <div className="vs-testi__inner">

              <div className="title-area text-left">
                <span className="sec-subtitle left-shape">Testimonials</span>
                <h2 className="sec-title">
                  What Our Client’s Feedback And Review
                </h2>
                <p className="sec-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* SLIDER */}
              <Slider {...settings} className="testi-slider">
                {testimonials.map((item) => (
                  <div className="vs-testi__style1" key={item.id}>
                    <span className="vs-testi__icon">
                      <img src="assets/img/icons/quote-icon.svg" alt="icon" />
                    </span>

                    <div className="vs-testi__top">
                      <div className="vs-testi__image">
                        <img src={item.image} alt={item.name} />
                      </div>

                      <div className="vs-testi__author">
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={
                                i < item.stars
                                  ? "fa-solid fa-star"
                                  : "fa-regular fa-star"
                              }
                            ></i>
                          ))}
                        </div>
                        <h3 className="vs-testi__title">{item.name}</h3>
                        <span className="vs-testi__desi">{item.role}</span>
                      </div>
                    </div>

                    <div className="vs-testi__content">
                      <p className="vs-testi__text">
                        <span className="text-highlight">
                          <img
                            className="icon"
                            src="assets/img/testimonial/testi-icon1.png"
                            alt="icon"
                          />
                          Lorem ipsum dolor sit amet!
                        </span>
                        “ When you work with Los Angeles House Cleaners
                        Referral Agency cleaning breathe easy because your
                        home will soon feel refreshed ”
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(Section7);
