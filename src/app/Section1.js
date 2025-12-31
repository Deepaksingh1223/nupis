import { memo } from "react";

const Section1 = () => {
  return (
    <section className="trending-layout1 space">
      <div className="container">

        {/* Title */}
        <div className="title-area2 animation-style1 title-anime">
          <span className="border-line d-xxl-block d-none"></span>

          <h2
            className="sec-title title-anime__title"
            style={{ textTransform: "initial" }}
          >
            Trending On Ebukz
          </h2>

          <a
            className="vs-btn wow animate__flipInX"
            data-wow-delay="0.30s"
            href="/shop"
          >
            View More
          </a>
        </div>

        {/* Products */}
        <div className="row g-4">

          {[
            {
              img: "product-img-1-1.jpg",
              author: "Fahim Al Bashar",
              title: "Rat Phnory Mttke",
              delay: "0.30s",
            },
            {
              img: "product-img-1-2.jpg",
              author: "H Abdul",
              title: "Ali Tofail Tu",
              delay: "0.40s",
            },
            {
              img: "product-img-1-3.jpg",
              author: "D Bellingham",
              title: "Green Journy",
              delay: "0.50s",
            },
            {
              img: "product-img-1-4.jpg",
              author: "Alex Jhon",
              title: "Fefcenting Pesentin",
              delay: "0.60s",
            },
            {
              img: "product-img-1-5.jpg",
              author: "Nicola joi",
              title: "Tevely Entiamile",
              delay: "0.70s",
            },
            {
              img: "product-img-1-6.jpg",
              author: "Fahim Al Bashar",
              title: "Gmerll Femed",
              delay: "0.80s",
            },
          ].map((item, index) => (
            <div className="col-xl-2 col-md-4 col-sm-6" key={index}>
              <div
                className="product-style1 wow animate__fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="product-img">
                  <img
                    src={`/assets/img/product/${item.img}`}
                    alt="product"
                  />

                  <div className="product-btns">
                    <a href="/wishlist" className="icon-btn wishlist">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart" className="icon-btn cart">
                      <i className="fa-solid fa-basket-shopping"></i>
                    </a>
                  </div>

                  <ul className="post-box">
                    <li>Hot</li>
                    <li>-30%</li>
                  </ul>
                </div>

                <div className="product-content">
                  <div className="product-rating">
                    <span className="star">
                      <i className="fas fa-star"></i> (4.5)
                    </span>
                    <ul className="price-list">
                      <li><del>$39.99</del></li>
                      <li>$30.00</li>
                    </ul>
                  </div>

                  <span className="product-author">
                    <strong>By:</strong> {item.author}
                  </span>

                  <h2 className="product-title">
                    <a href="/shop">{item.title}</a>
                  </h2>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default memo(Section1);
