import { memo } from "react";

const products = [
  {
    id: 1,
    img: "assets/img/product/product-img-5-1.jpg",
    author: "Fahim Al Bashar",
    title: "The Muke Guy",
    delay: "0.30s",
  },
  {
    id: 2,
    img: "assets/img/product/product-img-5-2.jpg",
    author: "H Abdul",
    title: "Levtimeline",
    delay: "0.40s",
  },
  {
    id: 3,
    img: "assets/img/product/product-img-5-3.jpg",
    author: "D Bellingham",
    title: "Mick Weive Mockchapu",
    delay: "0.50s",
  },
  {
    id: 4,
    img: "assets/img/product/product-img-5-4.jpg",
    author: "Alex Jhon",
    title: "Fuarcnusk Preentine",
    delay: "0.60s",
  },
  {
    id: 5,
    img: "assets/img/product/product-img-5-5.jpg",
    author: "Nicola joi",
    title: "L Art Du Subtiliste",
    delay: "0.70s",
  },
  {
    id: 6,
    img: "assets/img/product/product-img-5-6.jpg",
    author: "Fahim Al Bashar",
    title: "Vqirk Teur Mocgkcup",
    delay: "0.80s",
  },
  {
    id: 7,
    img: "assets/img/product/product-img-5-7.jpg",
    author: "Nicola joi",
    title: "Hd Pry Balir Ptonnrnle",
    delay: "0.90s",
  },
  {
    id: 8,
    img: "assets/img/product/product-img-5-8.jpg",
    author: "Fahim Al Bashar",
    title: "Beuto minimal Cork",
    delay: "0.95s",
  },
];

const Section6 = () => {
  return (
    <section
      className="books-layout1 space background-image"
      style={{ backgroundImage: "url(assets/img/bg/section-bg1.jpg)" }}
    >
      <div className="container">
        <div className="title-area text-center animation-style1 title-anime">
          <h2 className="sec-title title-anime__title">
            Book Of The Month
          </h2>
        </div>

        <div className="row g-4">
          {products.map((item) => (
            <div
              className="col-xl-3 col-md-4 col-sm-6"
              key={item.id}
            >
              <div
                className="product-style1 wow animate__fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="product-img">
                  <img src={item.img} alt="product" />

                  <div className="product-btns">
                    <a href="wishlist.html" className="icon-btn wishlist">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="cart.html" className="icon-btn cart">
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
                    <a href="shop.html">{item.title}</a>
                  </h2>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center">
            <a
              href="shop.html"
              className="vs-btn mt-10 wow animate__flipInX"
              data-wow-delay="0.40s"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Section6);
