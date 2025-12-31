import { memo } from "react";

const Section5 = () => {
  return (
    <>
      {/* ================= ROMANCE BOOKS ================= */}
      <section className="romance-layout1 space-top">
        <div className="container space-bottom position-relative">
          <div className="title-area2 animation-style1">
            <h2 className="sec-title">Best Selling Romance Books</h2>
            <a
              href="shop.html"
              className="vs-btn wow animate__flipInX"
              data-wow-delay="0.6s"
            >
              View More
            </a>
          </div>

          <div className="row g-4">
            {romanceBooks.map((item, index) => (
              <div key={index} className="col-xl-2 col-md-4 col-sm-6">
                <div
                  className="product-style1 wow animate__fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.1}s`}
                >
                  <div className="product-img">
                    <img src={item.image} alt={item.title} />

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
                        <li>
                          <del>$39.99</del>
                        </li>
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
          </div>

          <span className="border-line"></span>
        </div>
      </section>

      {/* ================= KIDS BOOKS ================= */}
      <section className="Kids-layout1 space">
        <div className="container">
          <div className="title-area2 animation-style1">
            <h2 className="sec-title">Best Selling Kids Books</h2>
            <a
              href="shop.html"
              className="vs-btn wow animate__flipInX"
              data-wow-delay="0.5s"
            >
              View More
            </a>
          </div>

          <div className="row g-4">
            {kidsBooks.map((item, index) => (
              <div key={index} className="col-xl-2 col-md-4 col-sm-6">
                <div
                  className="product-style1 wow animate__fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.1}s`}
                >
                  <div className="product-img">
                    <img src={item.image} alt={item.title} />

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
                        <li>
                          <del>$39.99</del>
                        </li>
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
          </div>
        </div>
      </section>
    </>
  );
};

/* ================= DATA OBJECTS ================= */

const romanceBooks = [
  {
    image: "/assets/img/product/product-img-3-1.jpg",
    title: "Rivetmane 10An",
    author: "Fahim Al Bashar",
  },
  {
    image: "/assets/img/product/product-img-3-2.jpg",
    title: "Love Nature",
    author: "H Abdul",
  },
  {
    image: "/assets/img/product/product-img-3-3.jpg",
    title: "Love Story",
    author: "D Bellingham",
  },
  {
    image: "/assets/img/product/product-img-3-4.jpg",
    title: "Stotc Stoite Ust...",
    author: "Alex Jhon",
  },
  {
    image: "/assets/img/product/product-img-3-5.jpg",
    title: "Cook Design Psvter",
    author: "Nicola joi",
  },
  {
    image: "/assets/img/product/product-img-3-6.jpg",
    title: "Cover Design",
    author: "Fahim Al Bashar",
  },
];

const kidsBooks = [
  {
    image: "/assets/img/product/product-img-4-1.jpg",
    title: "Aelon Nacedile",
    author: "Fahim Al Bashar",
  },
  {
    image: "/assets/img/product/product-img-4-2.jpg",
    title: "Parer Book",
    author: "H Abdul",
  },
  {
    image: "/assets/img/product/product-img-4-3.jpg",
    title: "Every Thought Sed",
    author: "D Bellingham",
  },
  {
    image: "/assets/img/product/product-img-4-4.jpg",
    title: "A Sunny Day",
    author: "Alex Jhon",
  },
  {
    image: "/assets/img/product/product-img-4-5.jpg",
    title: "Present Trop Ical",
    author: "Nicola joi",
  },
  {
    image: "/assets/img/product/product-img-4-6.jpg",
    title: "Whispers of Wild",
    author: "Fahim Al Bashar",
  },
];

export default memo(Section5);
