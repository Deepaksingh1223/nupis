import { memo } from "react";

const Section3 = () => {
  return (
    <section
      className="categories-layout1 space background-image"
      style={{
        backgroundImage: "url('/assets/img/bg/categorie-bg1.jpg')",
      }}
    >
      <div className="container">

        {/* Title */}
        <div className="title-area text-center animation-style1 title-anime">
          <h2
            className="sec-title title-anime__title"
            style={{ textTransform: "initial" }}
          >
            Top Categories
          </h2>
        </div>

        {/* Categories */}
        <div className="row g-4 mb-40 filter-menu-active">
          {[
            { title: "Romance", img: "catigori-1-1.png", active: true },
            { title: "Thriller", img: "catigori-1-2.png" },
            { title: "Fantasy", img: "catigori-1-3.png" },
            { title: "Since Fiction", img: "catigori-1-4.png" },
            { title: "Since", img: "catigori-1-5.png" },
            { title: "Adventure", img: "catigori-1-6.png" },
          ].map((item, i) => (
            <div className="col-xl-2 col-lg-3 col-md-4 col-6" key={i}>
              <div
                className={`categorie-style1 wow animate__fadeInUp ${
                  item.active ? "active" : ""
                }`}
                data-wow-delay={`${0.3 + i * 0.1}s`}
              >
                <img
                  src={`/assets/img/categoris/${item.img}`}
                  alt={item.title}
                />
                <h4 className="categorie-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="row gy-30 mb-40">
          {[
            { img: "product-img-2-1.jpg", author: "Fahim Al Bashar", title: "Feel The Bloosme Session" },
            { img: "product-img-2-2.jpg", author: "Fahim Al Bashar", title: "World Adventure Trekking" },
            { img: "product-img-2-3.jpg", author: "Keep Clam Mountain", title: "Feel The Bloosme Session" },
            { img: "product-img-2-4.jpg", author: "Learn From Nature", title: "Feel The Bloosme Session" },
            { img: "product-img-2-5.jpg", author: "Rat Phnory Mttke Srial", title: "Feel The Bloosme Session" },
            { img: "product-img-2-6.jpg", author: "Negated Story Life", title: "Feel The Bloosme Session" },
          ].map((item, i) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
              <div
                className="product-style1 style2 wow animate__fadeInUp"
                data-wow-delay={`${0.3 + i * 0.1}s`}
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
                  </div>
                  <ul className="post-box">
                    <li>Hot</li>
                    <li>-30%</li>
                  </ul>
                </div>

                <div className="product-content">
                  <div className="star-rating">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="fa-solid fa-star"></i>
                    ))}
                  </div>

                  <span className="product-author">
                    <strong>By:</strong> {item.author}
                  </span>

                  <h2 className="product-title">
                    <a href="/shop">{item.title}</a>
                  </h2>

                  <ul className="price-list">
                    <li><del>$124</del></li>
                    <li>$100</li>
                  </ul>

                  <div className="product-btn">
                    <a className="vs-btn" href="/cart">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <a className="vs-btn wow animate__flipInX" href="/shop">
            View More
          </a>
        </div>

      </div>
    </section>
  );
};

export default memo(Section3);
