import { memo } from "react";

const Section4 = () => {
  return (
    <section
      className="selling-layout1 space background-image"
      style={{
        backgroundImage: "url('/assets/img/bg/selling-bg.jpg')",
      }}
    >
      <div className="container">
        <div className="row g-4 gx-40 align-items-center">

          {/* Content */}
          <div className="col-xl-5">
            <div className="selling-content">
              <h2
                className="selling-title wow animate__fadeInUp"
                data-wow-delay="0.20s"
              >
                Best Seller Author Of The Month
              </h2>

              <h4
                className="author-name wow animate__fadeInUp"
                data-wow-delay="0.30s"
              >
                Joseph Martin
              </h4>

              <span
                className="published wow animate__fadeInUp"
                data-wow-delay="0.40s"
              >
                30+ Published Book
              </span>

              <p
                className="selling-text wow animate__fadeInUp"
                data-wow-delay="0.50s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi aliquip ex ea commodo consequat.
              </p>

              <a
                className="vs-btn wow animate__flipInX"
                data-wow-delay="0.60s"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Main Image */}
          <div className="col-xl-4">
            <div
              className="selling-img-tag wow animate__fadeInUp"
              data-wow-delay="0.30s"
            >
              <div
                className="wow animate__fadeInDownBig"
                data-wow-delay="0.30s"
              >
                <div className="tag">
                  <img
                    src="/assets/img/selling/selling-icon.png"
                    alt="selling icon"
                  />
                  <h4 className="tag-title">
                    no.1 Best Seller Of The Month
                  </h4>
                </div>
              </div>

              <img
                src="/assets/img/selling/selling-img.jpg"
                className="w-100"
                alt="selling"
              />
            </div>
          </div>

          {/* Books */}
          <div className="col-xl-3">
            <div className="selling-books">
              {[
                "book-img1.jpg",
                "book-img2.jpg",
                "book-img3.jpg",
                "book-img4.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  className={`book-item wow ${
                    i < 2 ? "animate__fadeInDown" : "animate__fadeInUp"
                  }`}
                  data-wow-delay={`${0.3 + i * 0.1}s`}
                >
                  <img
                    src={`/assets/img/selling/${img}`}
                    alt="book"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(Section4);
