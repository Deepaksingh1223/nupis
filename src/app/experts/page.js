import { memo } from "react"; 

const Section4 = () => {
  return (
    <section className="finance-education-section1">
            <section className="contactus-hero">
          <div className="contactus-container">
            <h1 className="contactus-main-title"> Meet Our Expert Educators</h1>
            <p className="contactus-hero-desc">
             Learn from verified professionals with decades of combined experience in financial markets, 
            technical analysis, risk management, and behavioral finance.
            </p>
          </div>
        </section>

      <div className="container"> 
        {/* Educator Cards Grid */}
        <div className="row g-4 mt-5">
          <div className="col-lg-6">
            <div className="educator-card">
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className="profile-image-container">
                    <div className="profile-image bg-primary-gradient">
                      <i className="fas fa-chart-line profile-icon"></i>
                    </div>
                     
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-between align-items-start flex-wrap ">
                    <div>
                      <h3 className="educator-name">Dr. Michael Chen</h3>
                      <p className="educator-role">Senior Forex Educator</p>
                    </div>
                    <span className="experience-badge">15+ Years</span>
                  </div>
                  
                  <div className="credentials text-dark mb-3">
                    <span className="credential-tag"><i className="fas fa-user-graduate"></i> PhD</span>
                    <span className="credential-tag"><i className="fas fa-award"></i> CFA</span>
                    <span className="credential-tag"><i className="fas fa-chart-bar"></i> CMT</span>
                  </div>
                  
                  <div className="specialization-card mb-3">
                    <h6><i className="fas fa-bullseye text-primary"></i> Specialization</h6>
                    <p className="mb-0 text-dark">Currency Markets & Technical Analysis</p>
                  </div>
                  
                  <p className="educator-description">
                    <i className="fas fa-quote-left text-primary me-2"></i>
                    Specialized in forex market structure, technical analysis methodologies, 
                    and risk management strategies for currency trading.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sarah Johnson */}
          <div className="col-lg-6">
            <div className="educator-card">
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className="profile-image-container">
                    <div className="profile-image bg-success-gradient">
                      <i className="fas fa-university profile-icon"></i>
                    </div>
                    
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-between align-items-start flex-wrap ">
                    <div>
                      <h3 className="educator-name">Sarah Johnson</h3>
                      <p className="educator-role">Stock Market Analyst</p>
                    </div>
                    <span className="experience-badge">12+ Years</span>
                  </div>
                  
                  <div className="credentials mb-3">
                    <span className="credential-tag"><i className="fas fa-graduation-cap"></i> MBA</span>
                    <span className="credential-tag"><i className="fas fa-award"></i> CFA Level III</span>
                  </div>
                  
                  <div className="specialization-card mb-3">
                    <h6><i className="fas fa-bullseye text-primary"></i> Specialization</h6>
                    <p className="mb-0 text-dark">Equity Analysis & Fundamental Research</p>
                  </div>
                  
                  <p className="educator-description">
                    <i className="fas fa-quote-left text-primary me-2"></i>
                    Expert in fundamental analysis, portfolio management concepts, 
                    and equity market cycles with focus on long-term value investing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* David Martinez */}
          <div className="col-lg-6">
            <div className="educator-card">
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className="profile-image-container">
                    <div className="profile-image bg-danger-gradient">
                      <i className="fas fa-shield-alt profile-icon"></i>
                    </div>
                   
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-between align-items-start flex-wrap ">
                    <div>
                      <h3 className="educator-name">David Martinez</h3>
                      <p className="educator-role">Risk Management Specialist</p>
                    </div>
                    <span className="experience-badge">10+ Years</span>
                  </div>
                  
                  <div className="credentials mb-3">
                    <span className="credential-tag"><i className="fas fa-user-graduate"></i> MSc</span>
                    <span className="credential-tag"><i className="fas fa-shield-alt"></i> FRM</span>
                  </div>
                  
                  <div className="specialization-card mb-3">
                    <h6><i className="fas fa-bullseye text-primary"></i> Specialization</h6>
                    <p className="mb-0 text-dark">Trading Psychology & Risk Control</p>
                  </div>
                  
                  <p className="educator-description">
                    <i className="fas fa-quote-left text-primary me-2"></i>
                    Focuses on behavioral finance, trading psychology, position sizing, 
                    and systematic risk management approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prof. Lisa Anderson */}
          <div className="col-lg-6">
            <div className="educator-card">
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className="profile-image-container">
                    <div className="profile-image bg-warning-gradient">
                      <i className="fas fa-brain profile-icon"></i>
                    </div>
                     
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-between align-items-start flex-wrap ">
                    <div>
                      <h3 className="educator-name">Prof. Lisa Anderson</h3>
                      <p className="educator-role">Behavioral Finance Expert</p>
                    </div>
                    <span className="experience-badge">18+ Years</span>
                  </div>
                  
                  <div className="credentials mb-3">
                    <span className="credential-tag"><i className="fas fa-user-graduate"></i> PhD</span>
                    <span className="credential-tag"><i className="fas fa-brain"></i> Behavioral Econ</span>
                  </div>
                  
                  <div className="specialization-card mb-3">
                    <h6><i className="fas fa-bullseye text-primary"></i> Specialization</h6>
                    <p className="mb-0 text-dark">Market Psychology & Decision Making</p>
                  </div>
                  
                  <p className="educator-description">
                    <i className="fas fa-quote-left text-primary me-2"></i>
                    Research-focused educator specializing in cognitive biases, emotional control, 
                    and decision-making frameworks in financial markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Areas of Expertise Section */}
      <div className="expertise-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Our <span className="text-highlight bg-dark">Areas of Expertise</span>
            </h2>
            <p className="section-subtitle">
              Our faculty covers all essential aspects of financial markets education.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="expertise-card">
                <div className="expertise-icon bg-primary-gradient">
                  <i className="fas fa-money-bill-wave"></i>
                </div>
                <h4 className="expertise-title">Currency Markets</h4>
                <p className="expertise-description">
                  Forex fundamentals, pair analysis, and market structure
                </p>
                <div className="expertise-footer">
                  <i className="fas fa-arrow-right"></i> Learn More
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="expertise-card">
                <div className="expertise-icon bg-success-gradient">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4 className="expertise-title">Equity Analysis</h4>
                <p className="expertise-description">
                  Stock market fundamentals and valuation methods
                </p>
                <div className="expertise-footer">
                  <i className="fas fa-arrow-right"></i> Learn More
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="expertise-card">
                <div className="expertise-icon bg-danger-gradient">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="expertise-title">Risk Control</h4>
                <p className="expertise-description">
                  Position sizing, portfolio risk, and money management
                </p>
                <div className="expertise-footer">
                  <i className="fas fa-arrow-right"></i> Learn More
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="expertise-card">
                <div className="expertise-icon bg-warning-gradient">
                  <i className="fas fa-brain"></i>
                </div>
                <h4 className="expertise-title">Psychology</h4>
                <p className="expertise-description">
                  Behavioral finance and emotional discipline
                </p>
                <div className="expertise-footer">
                  <i className="fas fa-arrow-right"></i> Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Credentials Section */}
      <div className="container my-5 py-5">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Professional <span className="text-highlight text-dark bg-dark">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Our educators hold recognized industry certifications and advanced degrees.
          </p>
        </div>

        <div className="row g-4">
          {[
            { title: "CFA", description: "Chartered Financial Analyst", icon: "fas fa-award", color: "primary" },
            { title: "CMT", description: "Chartered Market Technician", icon: "fas fa-chart-bar", color: "success" },
            { title: "FRM", description: "Financial Risk Manager", icon: "fas fa-shield-alt", color: "danger" },
            { title: "PhD", description: "Economics & Finance", icon: "fas fa-user-graduate", color: "warning" },
            { title: "MBA", description: "Finance & Analytics", icon: "fas fa-graduation-cap", color: "info" },
            { title: "MSc", description: "Financial Engineering", icon: "fas fa-certificate", color: "purple" }
          ].map((credential, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={`credential-card credential-${credential.color}`}>
                <div className="credential-icon">
                  <i className={credential.icon}></i>
                </div>
                <h4 className="credential-title">{credential.title}</h4>
                <p className="credential-description">{credential.description}</p>
                <div className="credential-stats">
                  <span><i className="fas fa-users"></i> 95% Pass Rate</span>
                  <span><i className="fas fa-clock"></i> 2+ Years</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Philosophy Section - Modified */}
      <div className="teaching-philosophy-section mb-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-white">
              Our <span className="text-highlight-white">Teaching Philosophy</span>
            </h2>
            <p className="section-subtitle text-white">
              Building a foundation of knowledge, ethics, and practical skills for sustainable success
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="philosophy-card-large">
                <div className="philosophy-icon-large bg-primary-gradient">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="philosophy-title-large">Education Over Profits</h3>
                <p className="philosophy-description-large">
                  We focus exclusively on education and skill development, never on guaranteed returns 
                  or get-rich-quick promises. Our goal is to build informed, disciplined learners who 
                  understand both opportunities and risks in financial markets.
                </p>
                <div className="philosophy-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>Focus on skill development</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>No false promises of returns</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>Risk-aware learning approach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="philosophy-card-large">
                <div className="philosophy-icon-large bg-success-gradient">
                  <i className="fas fa-flask"></i>
                </div>
                <h3 className="philosophy-title-large">Research-Backed Methods</h3>
                <p className="philosophy-description-large">
                  Our teaching approaches are grounded in academic research, market history, 
                  and proven analytical frameworks. We emphasize systematic thinking over 
                  emotional reactions to build sustainable trading strategies.
                </p>
                <div className="philosophy-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>Academic research based</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>Market history analysis</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>Systematic thinking focus</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="philosophy-card-large">
                <div className="philosophy-icon-large bg-danger-gradient">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h3 className="philosophy-title-large">Ethics & Compliance First</h3>
                <p className="philosophy-description-large">
                  Every course emphasizes regulatory compliance, ethical considerations, 
                  and responsible market participation. We maintain the highest standards 
                  of educational integrity and professional conduct.
                </p>
                <div className="philosophy-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>Regulatory compliance focus</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>Highest ethical standards</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-check-circle text-success"></i>
                    <span>Market integrity education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="teaching-principles mt-5">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="principle-item">
                  <i className="fas fa-handshake principle-icon"></i>
                  <div>
                    <h5>Practical Application Focus</h5>
                    <p>Real-world scenarios and case studies integrated into all courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-item">
                  <i className="fas fa-users principle-icon"></i>
                  <div>
                    <h5>Lifetime Learning Support</h5>
                    <p>Continuous education updates and community access for all alumni</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-item">
                  <i className="fas fa-chart-line principle-icon"></i>
                  <div>
                    <h5>Performance Tracking</h5>
                    <p>Regular assessments and progress tracking for measurable growth</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-item">
                  <i className="fas fa-comments principle-icon"></i>
                  <div>
                    <h5>Interactive Learning</h5>
                    <p>Live sessions, Q&A forums, and peer discussions for active learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Section4);