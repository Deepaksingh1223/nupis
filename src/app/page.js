import Image from "next/image";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

export default function Home() {
  return (
    <>
      <section
        className="hero-layout1"
        data-wow-delay="0.25s"
        aria-hidden={true}
        style={{ opacity: 1, visibility: "inherit" }}
      >
        <div
          className="hero-item background-image"
          style={{
            backgroundImage: "url('/assets/img/bg/hero-bg1.jpg')",
          }}
        >
          <div className="container position-relative z-index">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 position-relative">
                <div className="hero-content">
                  <h1
                    className="hero-title wow animate__fadeInUp"
                    data-wow-delay="0.50s"
                  >
                    The Most Biggest{" "}
                    <span className="title-highlight">Bookstore</span> in the
                    world
                  </h1>

                  <p
                    className="hero-text wow animate__fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    We deliver books all over the world 10,000+ books in stock.
                  </p>

                  <a
                    className="vs-btn wow animate__flipInX"
                    data-wow-delay="0.95s"
                    href="/shop"
                  >
                    Explore More
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-img">
                  <Image
                    src="/assets/img/hero/hero-img-1-1.png"
                    alt="hero image"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shapes */}
        <span
          className="shape-mockup element1 z-index1 d-xxl-block d-none"
          style={{ right: 0, top: "-10px" }}
        >
          <Image
            src="/assets/img/shapes/hero-shape2.svg"
            alt="Hero shape"
            width={150}
            height={150}
          />
        </span>

        <span
          className="shape-mockup element2 z-index1 d-xxl-block d-none"
          style={{ left: 0, bottom: "-10px" }}
        >
          <Image
            src="/assets/img/shapes/hero-shape3.svg"
            alt="Hero shape"
            width={150}
            height={150}
          />
        </span>

        <span
          className="shape-mockup z-index1 wow animate__fadeInLeft d-xxl-block d-none"
          data-wow-delay="0.80s"
          style={{ left: 0, top: 0 }}
        >
          <Image
            src="/assets/img/shapes/hero-shape1.svg"
            alt="Hero shape"
            width={150}
            height={150}
          />
        </span>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7/>
      <Section8/>
    </>
  );
}
