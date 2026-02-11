"use client";
import { memo, useState } from "react";
import Image from "next/image";
import {
  FaPlayCircle,
  FaFilter,
  FaClock,
  FaStar,
  FaBell,
  FaArrowRight,
  FaLongArrowAltRight,
  FaChevronRight,
  FaRegClock,
  FaVideo
} from "react-icons/fa";
import {
  RiMailLine
} from "react-icons/ri";

const Section5 = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const categories = [
    "All",
    "Introduction",
    "Forex Education",
    "Stock Market",
    "Technical Analysis",
    "Risk Management",
    "Psychology"
  ];

 const videoData = [
    {
      id: 1,
      title: "Welcome to NUPIPS · 30 Second Introduction",
      description: "Discover our mission to provide world-class financial markets education focused on Forex, Stock Markets, and responsible trading practices.",
      category: "Introduction",
      duration: "0:30",
      timeAgo: "2 days ago",
      rating: 4.9,
      reviews: 120,
      imgSrc: "/assets/img/videos/Introduction.png",
      bgClass: "edu-bg-primary-soft"
    },
    {
      id: 2,
      title: "Understanding Forex Market Structure",
      description: "Learn the fundamentals of currency pair mechanics and market participants.",
      category: "Forex Education",
      duration: "15:24",
      timeAgo: "1 week ago",
      rating: 4.8,
      reviews: 89,
      imgSrc: "/assets/img/videos/Forex-Education.png",
      bgClass: "edu-bg-info-soft"
    },
    {
      id: 3,
      title: "Introduction to Technical Analysis",
      description: "Basic concepts of chart reading, trends, and support/resistance levels.",
      category: "Technical Analysis",
      duration: "22:10",
      timeAgo: "3 days ago",
      rating: 4.9,
      reviews: 156,
      imgSrc: "/assets/img/videos/Technical-Analysis.png",
      bgClass: "edu-bg-success-soft"
    },
    {
      id: 4,
      title: "Risk Management Essentials",
      description: "Core principles of position sizing and portfolio risk control.",
      category: "Risk Management",
      duration: "18:45",
      timeAgo: "5 days ago",
      rating: 4.7,
      reviews: 67,
      imgSrc: "/assets/img/videos/Risk-Management.png",
      bgClass: "edu-bg-danger-soft"
    },
    {
      id: 5,
      title: "Stock Market Fundamentals",
      description: "Understanding equity markets, order types, and market mechanics.",
      category: "Stock Market",
      duration: "20:30",
      timeAgo: "1 week ago",
      rating: 4.8,
      reviews: 92,
      imgSrc: "/assets/img/videos/Stock-Market.png",
      bgClass: "edu-bg-warning-soft"
    },
    {
      id: 6,
      title: "Trading Psychology & Discipline",
      description: "Mastering emotional control and decision-making in financial markets.",
      category: "Psychology",
      duration: "25:15",
      timeAgo: "4 days ago",
      rating: 4.9,
      reviews: 134,
      imgSrc: "/assets/img/videos/Psychology.png",
      bgClass: "edu-bg-purple-soft"
    }
  ];
  const filteredVideos = activeCategory === "All" 
    ? videoData 
    : videoData.filter(video => video.category === activeCategory);

  return (
    <div className="edu-video-library">

      {/*===========================================
          HERO SECTION - Educational Video Library
      ===========================================*/}
      <section className="edu-hero-wrapper">
        <div className="edu-container">
          <div className="edu-hero-content">
            <div className="edu-hero-badge">
              <FaVideo className="edu-hero-badge-icon" />
              <span>Educational Video Library</span>
            </div>
            
            <h1 className="edu-hero-title">
              Comprehensive Financial <span className="edu-text-gradient">Markets Education</span>
            </h1>
            
            <p className="edu-hero-description">
              Comprehensive video tutorials covering financial markets, technical analysis, 
              risk management, and trading psychology. Learn at your own pace.
            </p>
            
            
          </div>
        </div>
        
      </section>
      <section className="edu-path-wrapper">
<div className="container ">
  <div className="row"> 
    <div className="edu-featured-card">
              <div className="edu-featured-icon-wrapper">
                <FaPlayCircle className="edu-featured-icon" />
              </div>
              <div className="edu-featured-content">
                <span className="edu-featured-badge">Featured Introduction</span>
                <h3 className="edu-featured-title">
                  Welcome to NUPIPS · 30 Second Introduction
                </h3>
                <p className="edu-featured-text">
                  Discover our mission to provide world-class financial markets education focused 
                  on Forex, Stock Markets, and responsible trading practices.
                </p>
                <a href="#" className="edu-featured-link">
                  Start here: Learn about NUPIPS mission and approach 
                  <FaLongArrowAltRight className="edu-featured-link-icon" />
                </a>
              </div>
            </div>
  </div>
</div>
</section>
      {/*===========================================
          CATEGORY SECTION - Browse by Category
      ===========================================*/}
      <section className="edu-category-wrapper">
        <div className="edu-container">
          <div className="edu-category-header">
            <h2 className="edu-section-title">Browse by Category</h2>
            <button className="edu-filter-btn">
              <FaFilter className="edu-filter-icon" />
              Filter
            </button>
          </div>

          <div className="edu-category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`edu-tab-btn ${activeCategory === category ? 'edu-tab-active' : 'edu-tab-inactive'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="edu-video-grid">
            {filteredVideos.map((video) => (
              <div key={video.id} className="edu-video-card">
                <div className={`edu-video-thumbnail ${video.bgClass}`}>
                  <div className="edu-thumbnail-image">
                    <Image 
                      src={video.imgSrc}
                      alt={video.title}
                      width={400}
                      height={225}
                      className="edu-thumbnail-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('edu-thumbnail-fallback');
                      }}
                    />
                  </div>
                  
                  <div className="edu-duration-badge">
                    <FaRegClock className="edu-duration-icon" />
                    {video.duration}
                  </div>
                </div>
                
                <div className="edu-video-body">
                  <div className="edu-video-meta">
                    <span className={`edu-category-badge edu-badge-${video.bgClass.split('-')[2]}`}>
                      {video.category}
                    </span>
                    <span className="edu-time-ago">
                      <FaClock className="edu-time-icon" />
                      {video.timeAgo}
                    </span>
                  </div>
                  
                  <h3 className="edu-video-title">{video.title}</h3>
                  <p className="edu-video-description">{video.description}</p>
                  
                  <div className="edu-video-footer">
                    <div className="edu-rating">
                      <div className="edu-stars">
                        <FaStar className="edu-star-filled" />
                        <FaStar className="edu-star-filled" />
                        <FaStar className="edu-star-filled" />
                        <FaStar className="edu-star-filled" />
                        <FaStar className="edu-star-filled" />
                      </div>
                      <span className="edu-rating-value">{video.rating}</span>
                      <span className="edu-reviews-count">({video.reviews} reviews)</span>
                    </div>
                    <a href="#" className="edu-watch-link">
                      Watch Now 
                      <FaChevronRight className="edu-watch-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*===========================================
          LEARNING PATH SECTION - Suggested Learning Path
      ===========================================*/}
      <section className="edu-path-wrapper">
        <div className="edu-container">
          <div className="edu-path-card">
            <div className="edu-path-header">
              <h2 className="edu-path-title text-white">Suggested Learning Path</h2>
              <p className="edu-path-subtitle">
                Follow this structured sequence for comprehensive understanding:
              </p>
            </div>
            
            <div className="edu-path-steps">
              <div className="edu-path-step">
                <div className="edu-step-number">1</div>
                <div className="edu-step-content">
                  <h4 className="edu-step-title">Understand NUPIPS approach and philosophy</h4>
                </div>
              </div>
              
              <div className="edu-path-step">
                <div className="edu-step-number">2</div>
                <div className="edu-step-content">
                  <h4 className="edu-step-title">Learn how to read charts and identify key indicators</h4>
                </div>
              </div>
              
              <div className="edu-path-step">
                <div className="edu-step-number">3</div>
                <div className="edu-step-content">
                  <h4 className="edu-step-title">Master chart reading and analytical tools</h4>
                </div>
              </div>
              
              <div className="edu-path-step">
                <div className="edu-step-number">4</div>
                <div className="edu-step-content">
                  <h4 className="edu-step-title">Essential skills for protecting capital</h4>
                </div>
              </div>
              
              <div className="edu-path-step">
                <div className="edu-step-number">5</div>
                <div className="edu-step-content">
                  <h4 className="edu-step-title">Develop emotional discipline and systematic thinking</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===========================================
          NEWSLETTER SECTION - New Content Every Week
      ===========================================*/}
      <section className="edu-newsletter-wrapper">
        <div className="edu-container">
          <div className="edu-newsletter-card">
            <div className="edu-newsletter-icon-wrapper">
              <FaBell className="edu-newsletter-icon" />
            </div>
            
            <h2 className="edu-newsletter-title">New Content Every Week</h2>
            
            <p className="edu-newsletter-text">
              Subscribe to receive notifications about new educational videos, 
              market updates, and learning resources.
            </p>
            
            <div className="edu-newsletter-form">
              <div className="edu-input-group">
                <span className="edu-input-icon">
                  <RiMailLine />
                </span>
                <input
                  type="email"
                  className="edu-email-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="edu-subscribe-btn">
                  Subscribe 
                  <FaArrowRight className="edu-subscribe-icon" />
                </button>
              </div>
              <p className="edu-privacy-text">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*===========================================
          STATS SECTION - Video Library Statistics
      ===========================================*/}
      <section className="edu-stats-wrapper">
        <div className="edu-container">
          <div className="edu-stats-grid">
            <div className="edu-stat-item">
              <div className="edu-stat-number">200+</div>
              <div className="edu-stat-label">VIDEO TUTORIALS</div>
            </div>
            
            <div className="edu-stat-item">
              <div className="edu-stat-number">50+</div>
              <div className="edu-stat-label">EXPERT EDUCATORS</div>
            </div>
            
            <div className="edu-stat-item">
              <div className="edu-stat-number">15K+</div>
              <div className="edu-stat-label">ACTIVE LEARNERS</div>
            </div>
            
            <div className="edu-stat-item">
              <div className="edu-stat-number">4.9★</div>
              <div className="edu-stat-label">AVERAGE RATING</div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default memo(Section5);