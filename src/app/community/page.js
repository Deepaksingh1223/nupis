import { memo } from "react";
import Image from "next/image";
const Section3 = () => {
  return (
    <div className="fin-edu-container">
      {/* Hero Section */}
      <section className="hero-edu-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <h1 className="hero-edu-title display-4 fw-bold mb-4">
                Learn Together, Grow Together
              </h1>
              <p className="hero-edu-subtitle lead mb-0">
                Comprehensive, structured programs in Forex and Stock Market education.
                Learn technical analysis, risk management, and trading psychology from
                industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="banner-img">
        <Image
          src="/assets/img/community-banner.jpg"
          alt="Partnership" className="banner-img"
          width={1000}
          height={300}
        />
      </div>

      <section class="features-edu-section py-5">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title mb-0">Partnership Benefits</h2>
            <p class="section-subtitle">Comprehensive support for integrating financial education into your curriculum</p>
          </div>
          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="feature-edu-card h-100 p-4">
                <div class="feature-edu-icon blue-edu-icon mb-3">
                  <i class="fa-solid fa-arrow-trend-up"></i>
                </div>
                <h3 class="feature-edu-title h5 fw-bold mb-2">Market Structure</h3>
                <p class="feature-edu-desc small mb-0">Understand how the global foreign exchange market operates, major participants,
                  and market sessions</p></div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="feature-edu-card h-100 p-4">
                <div class="feature-edu-icon green-edu-icon mb-3">
                  <i class="fa-solid fa-book-open"></i>
                </div>
                <h3 class="feature-edu-title h5 fw-bold mb-2">Technical Analysis</h3>
                <p class="feature-edu-desc small mb-0">
                  Master chart patterns, indicators, and
                  price action strategies for market analysis
                </p>
              </div></div><div class="col-12 col-md-6 col-lg-3">
              <div class="feature-edu-card h-100 p-4">
                <div class="feature-edu-icon purple-edu-icon mb-3">
                  <i class="fa-solid fa-shield-heart"></i>
                </div>
                <h3 class="feature-edu-title h5 fw-bold mb-2">Risk Management</h3>
                <p class="feature-edu-desc small mb-0">Essential strategies to protect
                  your capital and manage trading risks effectively</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="feature-edu-card h-100 p-4">
                <div class="feature-edu-icon amber-edu-icon mb-3">
                  <i class="fa-solid fa-brain">
                  </i></div><h3 class="feature-edu-title h5 fw-bold mb-2">Trading Psychology</h3>
                <p class="feature-edu-desc small mb-0">Develop the mental discipline and emotional control required for consistent trading</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="included-section">
        <div class="container">
          <div class="included-wrapper"> 
                  <Image
          src="/assets/img/Educational-Resources-img.jpg"
          alt="Partnership" className="banner-img m-0"
          width={600}
          height={600}
        />  
            <div class="included-list">
              <h3 class="section-title-left">What's Included</h3><div class="features-list">
                <div class="feature-item">
                  <div class="feature-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></div><div class="feature-content"><h4 class="feature-title">Structured Curriculum</h4>
                    <p class="feature-description">Complete course materials covering Forex, stock markets, risk management, and trading psychology</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-check"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="feature-content"><h4 class="feature-title">Teaching Resources</h4><p class="feature-description">Lesson plans, presentation slides, case studies, and assessment materials</p></div></div><div class="feature-item"><div class="feature-check"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="feature-content"><h4 class="feature-title">Certification Programs</h4><p class="feature-description">Recognized certificates for students completing structured learning modules</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      </path></svg>
                  </div>
                  <div class="feature-content">
                    <h4 class="feature-title">Ongoing Support</h4>
                    <p class="feature-description">Regular updates, new content, and dedicated partnership support team</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></div>
                  <div class="feature-content">
                    <h4 class="feature-title">Faculty Training</h4>
                    <p class="feature-description">Professional development workshops for your educators on financial markets education</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="feature-content">
                    <h4 class="feature-title">Co-Branded Materials</h4>
                    <p class="feature-description">
                      Customized content featuring both NUPIPS and your institution's branding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="community-bg-section">
        <div className="row">
          <div className="container">

            <h2 class="community-main-title1 mb-4 text-white">Our Growing Community</h2>

            <div class="stats-grid">
              <div class="stat-card mb-3">
                <h3 class="stat-number1">15,000+</h3>
                <p class="stat-label1">Active Learners</p>
              </div>

              <div class="stat-card mb-3">
                <h3 class="stat-number1">500+</h3>
                <p class="stat-label1">Daily Discussions</p>
              </div>

              <div class="stat-card mb-3">
                <h3 class="stat-number1">200+</h3>
                <p class="stat-label1">Weekly Sessions</p>
              </div>

              <div class="stat-card mb-3">
                <h3 class="stat-number1">50+</h3>
                <p class="stat-label1">Expert Educators</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Recent-Discussions">
        <div className="container">
          <div className="row">
            <div class="col-lg-12 mb-4 mb-lg-0">
              <h3 class="community-subtitle1 mb-3">Recent Discussions</h3>
              <div class="discussions-container shado-none">
                <div class="discussion-item discussion-item-card mb-3 p-3">
                  <div class="d-flex justify-content-between align-items-start">
                    <div class="discussion-content">
                      <div className="day-card circal-div bg-primary">
                        <h6>SC</h6>
                      </div>
                      <div>
                        <h5 class="discussion-author mb-1">Sarah Chen <div>7 hr year</div></h5>
                        <p class="discussion-topic mb-1">Understanding Support and Resistance Levels</p>
                      <div className="msg-flexing-div">
                          <span class="discussion-category">Technical Analysis </span><spam><i class="fa-regular fa-message"></i>24 Message</spam>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="discussion-item discussion-item-card mb-3 p-3">
                  <div class="d-flex justify-content-between align-items-start">
                    <div class="discussion-content">
                      <div className="day-card circal-div bg-primary">
                        <h6>SC</h6>
                      </div>
                      <div>
                        <h5 class="discussion-author mb-1">Michael Rodriguez <div>7 hr year</div></h5>
                        <p class="discussion-topic mb-1">Risk Management Strategies for Beginners</p>
                        <div className="msg-flexing-div">
                          <span class="discussion-category">Risk Management</span><spam><i class="fa-regular fa-message"></i>24 Message</spam>
                      </div> 
                      </div>
                    </div>
                  </div>
                </div>

                <div class="discussion-item discussion-item-card mb-3 p-3">
                  <div class="d-flex justify-content-between align-items-start">
                    <div class="discussion-content">
                      <div className="day-card circal-div bg-primary">
                        <h6>SC</h6>
                      </div>
                      <div>
                        <h5 class="discussion-author mb-1">Priya Sharma <div>7 hr year</div></h5>
                        <p class="discussion-topic mb-1">Analyzing Economic Indicators Impact</p>
                        <div className="msg-flexing-div">
                          <span class="discussion-category">Fundamental Analysis</span><spam><i class="fa-regular fa-message"></i>24 Message</spam>
                      </div> 
                        <span class="discussion-category"></span>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="discussion-item discussion-item-card mb-3 p-3">
                  <div class="d-flex justify-content-between align-items-start">
                    <div class="discussion-content">
                      <div className="day-card circal-div bg-primary">
                        <h6>SC</h6>
                      </div>
                      <div>
                        <h5 class="discussion-author mb-1">James Wilson <div>7 hr year</div></h5>
                        <p class="discussion-topic mb-1">Trading Psychology: Overcoming Fear</p>
                        <span class="discussion-category">Psychology</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="discussion-item discussion-item-card mb-3 p-3">
                  <div class="d-flex justify-content-between align-items-start">
                    <div class="discussion-content">
                      <div className="day-card circal-div bg-primary">
                        <h6>SC</h6>
                      </div>
                      <div>
                        <h5 class="discussion-author mb-1">Aisha Mohammed <div>7 hr year</div></h5>
                        <p class="discussion-topic mb-1">Stock Market Sector Rotation Explained</p>
                        <span class="discussion-category">Stock Market</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Upcoming-Events">
        <div className="container">
          <h3 class="community-subtitle1 mb-3">Upcoming Events</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="event-item mb-3 p-3 card border-bottom ">
                <div class="day-flesing-day">
                  <div className="day-card bg-primary">
                    <h6>15</h6>
                    <p>MAR</p>
                  </div>
                  <div>
                    <h5 class="event-title mb-2">Forex Market Structure Masterclass</h5>
                    <p class="event-time mb-1">6:00 PM - 8:00 PM EST</p>
                    <p class="event-instructor mb-2">Dr. Robert Chen</p>
                    <div class="event-registered">234 registered</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="event-item mb-3 p-3 card border-bottom ">
                <div class="day-flesing-day">
                  <div className="day-card bg-primary">
                    <h6>18</h6>
                    <p>MAR</p>
                  </div>
                  <div>
                    <h5 class="event-title mb-2">Stock Market Technical Analysis Workshop</h5>
                    <p class="event-time mb-1">7:00 PM - 9:00 PM EST</p>
                    <p class="event-instructor mb-2">Emily Thompson</p>
                    <div class="event-registered">189 registered</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="event-item mb-3 p-3 card border-bottom ">
                <div class="day-flesing-day">
                  <div className="day-card bg-primary">
                    <h6>22</h6>
                    <p>MAR</p>
                  </div>
                  <div>
                    <h5 class="event-title mb-2">Trading Psychology & Discipline</h5>
                    <p class="event-time mb-1">5:00 PM - 7:00 PM EST</p>
                    <p class="event-instructor mb-2">Dr. Sarah Williams</p>
                    <div class="event-registered">312 registered</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="event-item mb-3 p-3 card border-bottom ">
                <div class="day-flesing-day">
                  <div className="day-card bg-primary">
                    <h6>25</h6>
                    <p>MAR</p>
                  </div>
                  <div>
                    <h5 class="event-title mb-2">Risk Management Fundamentals</h5>
                    <p class="event-time mb-1">6:30 PM - 8:30 PM EST</p>
                    <p class="event-instructor mb-2">Michael Anderson</p>
                    <div class="event-registered">267 registered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Community-Guidelines">
        <div className="container">
          <h3 class="community-subtitle mb-3">Community Guidelines</h3>
          <p class="guidelines-subtitle mb-4 text-center">Maintaining a professional, educational environment</p>
          <div className="row justify-content-center">
            <div class="col-lg-8 mb-4 mb-lg-0">
              <div class="guidelines-container">
                <div class="guideline-item d-flex mb-3">
                  <div class="guideline-icon me-3">📚</div>
                  <div>
                    <h5 class="guideline-title mb-1">Education-First:</h5>
                    <p class="guideline-text">All discussions must be educational in nature. No financial advice or specific investment recommendations.</p>
                  </div>
                </div>

                <div class="guideline-item d-flex mb-3">
                  <div class="guideline-icon me-3">🤝</div>
                  <div>
                    <h5 class="guideline-title mb-1">Respectful Dialogue:</h5>
                    <p class="guideline-text">Treat all members with respect. Constructive feedback and diverse perspectives are encouraged.</p>
                  </div>
                </div>

                <div class="guideline-item d-flex mb-3">
                  <div class="guideline-icon me-3">⚠️</div>
                  <div>
                    <h5 class="guideline-title mb-1">No Guarantees:</h5>
                    <p class="guideline-text">Do not make claims about guaranteed returns, success rates, or trading performance.</p>
                  </div>
                </div>

                <div class="guideline-item d-flex mb-3">
                  <div class="guideline-icon me-3">⭐</div>
                  <div>
                    <h5 class="guideline-title mb-1">Quality Content:</h5>
                    <p class="guideline-text">Share well-researched analysis, credible sources, and thoughtful questions.</p>
                  </div>
                </div>

                <div class="guideline-item d-flex">
                  <div class="guideline-icon me-3">🔞</div>
                  <div>
                    <h5 class="guideline-title mb-1">Age Requirement:</h5>
                    <p class="guideline-text">All community members must be 18 years or older.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="community-section py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h3 class="cta-title mb-3 text-white">Ready to Join Our Learning Community?</h3>
              <p class="cta-text mb-4">Connect with learners worldwide and accelerate your financial education</p>
              <button class="btn btn-join-community py-3">Get Started Today</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Section3);