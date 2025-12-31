import { memo } from "react";

const Section2 = () => {
  return (
    <div className="offer-layout1 space-bottom">
      <div className="container">
        <div className="row g-4">

          {/* Offer 1 */}
          <div className="col-xl-6 col-lg-6">
            <div
              className="offer-style1 wow animate__fadeInLeft background-image"
              data-wow-delay="0.30s"
              style={{
                backgroundImage: "url('/assets/img/bg/offer-bg1.jpg')",
              }}
            >
              <div className="offer-img">
                <img
                  src="/assets/img/offer/offer-img1.png"
                  alt="offer"
                />
              </div>

              <div className="offer-content">
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>

                <h2 className="offer-title">E Emeher Mme</h2>
                <p className="offer-price">
                  Only From <span>$85.00</span>
                </p>
                <a className="vs-btn" href="/shop">
                  Shop Now
                </a>
              </div>

              <span
                className="shape-mockup element1 z-index1 d-xxl-block d-none"
                style={{ right: 0, bottom: "-5px" }}
              >
                <img
                  src="/assets/img/shapes/offer-shape1.png"
                  alt="shape"
                />
              </span>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="col-xl-6 col-lg-6">
            <div
              className="offer-style1 white-style wow animate__fadeInRight background-image"
              data-wow-delay="0.30s"
              style={{
                backgroundImage: "url('/assets/img/bg/offer-bg2.jpg')",
              }}
            >
              <div className="offer-img">
                <img
                  src="/assets/img/offer/offer-img1.png"
                  alt="offer"
                />
              </div>

              <div className="offer-content">
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>

                <h2 className="offer-title">Viving Moneme</h2>
                <p className="offer-price">
                  Only From <span>$85.00</span>
                </p>
                <a className="vs-btn" href="/shop">
                  Shop Now
                </a>
              </div>

              <span
                className="shape-mockup element1 z-index1 d-xxl-block d-none"
                style={{ right: 0, bottom: "-5px" }}
              >
                <img
                  src="/assets/img/shapes/offer-shape2.png"
                  alt="shape"
                />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default memo(Section2);
