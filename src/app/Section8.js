"use client";

import { memo } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

/* ---------- Custom Arrows ---------- */
const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev custom-arrow" onClick={onClick}>
    <i className="fa-solid fa-arrow-left"></i>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next custom-arrow" onClick={onClick}>
    <i className="fa-solid fa-arrow-right"></i>
  </button>
);

/* ---------- Blog Data ---------- */
const blogs = [
  { id: 1, img: "assets/img/blog/blog-img-1-1.jpg", date: "15", month: "May", title: "Lorem ipsum dolor sit amet consectetur." },
  { id: 2, img: "assets/img/blog/blog-img-1-2.jpg", date: "16", month: "May", title: "Lorem ipsum dolor sit amet consectetur." },
  { id: 3, img: "assets/img/blog/blog-img-1-3.jpg", date: "16", month: "May", title: "Lorem ipsum dolor sit amet consectetur." },
  { id: 4, img: "assets/img/blog/blog-img-1-4.jpg", date: "16", month: "May", title: "Lorem ipsum dolor sit amet consectetur." },
  { id: 5, img: "assets/img/blog/blog-img-1-5.jpg", date: "16", month: "May", title: "Lorem ipsum dolor sit amet consectetur." },
];

/* ---------- Slider Settings ---------- */
const sliderSettings = {
  arrows: true, // must be true to use custom arrows
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Section8 = () => {
  return (
    <section className="custom-space-bottom arrow-wrap">
      <div className="container">
        {/* -------- Title -------- */}
        <div className="title-area2">
          <h2 className="sec-title">Blog And News</h2>
          <a href="blog.html" className="vs-btn">
            View More
          </a>
        </div>

        {/* -------- Slider -------- */}
        <Slider {...sliderSettings} className="blog-carousel">
          {blogs.map((blog) => (
            <div key={blog.id} className="px-3">
              <div className="vs-blog blog-style1">
                <div className="blog-img">
                  <img src={blog.img} alt="Blog" className="blog-img__img" />
                  <div className="blog-date">
                    <span className="day">
                      <strong className="month">{blog.date}</strong>
                      {blog.month}
                    </span>
                  </div>
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="#">
                      <i className="fa-solid fa-user"></i> By Admin
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-comments"></i> 2 Comments
                    </a>
                  </div>

                  <h2 className="blog-title">
                    <a href="blog-details.html">{blog.title}</a>
                  </h2>

                  <div className="btn-area">
                    <a className="vs-btn" href="blog-details.html">
                      Read More <i className="fa-regular fa-arrow-right"></i>
                    </a>

                    <div className="social-media">
                      <div className="member-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-behance"></i></a>
                      </div>
                      <span className="icon-btn">
                        <i className="fas fa-share-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default memo(Section8);
