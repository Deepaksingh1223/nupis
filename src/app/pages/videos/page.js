import { memo } from "react"; 
const Section5 = () => {
  return (
    <div className="finance-edu-container">
      {/* Section 1: Expert Educators */}
      <section className="expert-educators-section">
        <div className="container py-5">
          <div className="section-header text-center mb-5">
            <h1 className="section-main-title">Meet Our Expert Educators</h1>
            <p className="section-subtitle">
              Learn from verified professionals with decades of combined experience in financial markets,
              technical analysis, risk management, and behavioral finance.
            </p>
          </div>

          <div className="row g-4">
            {/* Dr. Michael Chen */}
            <div className="col-md-6">
              <div className="educator-profile-card">
                <div className="educator-card-inner">
                  <div className="educator-avatar avatar-primary">
                    <span className="educator-initials">MC</span>
                  </div>
                  <div className="educator-info">
                    <h3 className="educator-name">Dr. Michael Chen</h3>
                    <p className="educator-role role-forex">Senior Forex Educator</p>
                    <div className="educator-badges">
                      <span className="badge-item">PhD</span>
                      <span className="badge-item">CFA</span>
                      <span className="badge-item">CMT</span>
                    </div>
                    <div className="educator-details">
                      <p className="specialization">
                        <strong>Specialization:</strong> Currency Markets & Technical Analysis
                      </p>
                      <p className="experience">
                        <strong>Experience:</strong> 15+ years
                      </p>
                    </div>
                    <p className="educator-description">
                      Specialized in forex market structure, technical analysis methodologies, and risk management strategies for currency trading.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sarah Johnson */}
            <div className="col-md-6">
              <div className="educator-profile-card">
                <div className="educator-card-inner">
                  <div className="educator-avatar avatar-equity">
                    <span className="educator-initials">SJ</span>
                  </div>
                  <div className="educator-info">
                    <h3 className="educator-name">Sarah Johnson</h3>
                    <p className="educator-role role-equity">Stock Market Analyst</p>
                    <div className="educator-badges">
                      <span className="badge-item">MBA</span>
                      <span className="badge-item">CFA III</span>
                    </div>
                    <div className="educator-details">
                      <p className="specialization">
                        <strong>Specialization:</strong> Equity Analysis & Fundamental Research
                      </p>
                      <p className="experience">
                        <strong>Experience:</strong> 12+ years
                      </p>
                    </div>
                    <p className="educator-description">
                      Expert in fundamental analysis, portfolio management concepts, and equity market cycles with focus on long-term value investing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* David Martinez */}
            <div className="col-md-6">
              <div className="educator-profile-card">
                <div className="educator-card-inner">
                  <div className="educator-avatar avatar-risk">
                    <span className="educator-initials">DM</span>
                  </div>
                  <div className="educator-info">
                    <h3 className="educator-name">David Martinez</h3>
                    <p className="educator-role role-risk">Risk Management Specialist</p>
                    <div className="educator-badges">
                      <span className="badge-item">MSc</span>
                      <span className="badge-item">FRM</span>
                    </div>
                    <div className="educator-details">
                      <p className="specialization">
                        <strong>Specialization:</strong> Trading Psychology & Risk Control
                      </p>
                      <p className="experience">
                        <strong>Experience:</strong> 10+ years
                      </p>
                    </div>
                    <p className="educator-description">
                      Focuses on behavioral finance, trading psychology, position sizing, and systematic risk management approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prof. Lisa Anderson */}
            <div className="col-md-6">
              <div className="educator-profile-card">
                <div className="educator-card-inner">
                  <div className="educator-avatar avatar-psychology">
                    <span className="educator-initials">LA</span>
                  </div>
                  <div className="educator-info">
                    <h3 className="educator-name">Prof. Lisa Anderson</h3>
                    <p className="educator-role role-psychology">Behavioral Finance Expert</p>
                    <div className="educator-badges">
                      <span className="badge-item">PhD</span>
                    </div>
                    <div className="educator-details">
                      <p className="specialization">
                        <strong>Specialization:</strong> Market Psychology & Decision Making
                      </p>
                      <p className="experience">
                        <strong>Experience:</strong> 18+ years
                      </p>
                    </div>
                    <p className="educator-description">
                      Research-focused educator specializing in cognitive biases, emotional control, and decision-making frameworks in financial markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Areas of Expertise */}
      <section className="expertise-section m-0">
        <div className="container py-5">
          <h2 className="section-title text-center mb-5">Areas of Expertise</h2>
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="expertise-card">
                <div className="expertise-icon icon-forex">
                  <span className="icon-symbol">💱</span>
                </div>
                <h3 className="expertise-title">Currency Markets</h3>
                <p className="expertise-description">
                  Forex fundamentals, pair analysis, and market structure
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="expertise-card">
                <div className="expertise-icon icon-equity">
                  <span className="icon-symbol">📈</span>
                </div>
                <h3 className="expertise-title">Equity Analysis</h3>
                <p className="expertise-description">
                  Stock market fundamentals and valuation methods
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="expertise-card">
                <div className="expertise-icon icon-risk">
                  <span className="icon-symbol">⚖️</span>
                </div>
                <h3 className="expertise-title">Risk Control</h3>
                <p className="expertise-description">
                  Position sizing, portfolio risk, and money management
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="expertise-card">
                <div className="expertise-icon icon-psychology">
                  <span className="icon-symbol">🧠</span>
                </div>
                <h3 className="expertise-title">Psychology</h3>
                <p className="expertise-description">
                  Behavioral finance and emotional discipline
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Professional Credentials */}
      <section className="credentials-section">
        <div className="container py-5">
          <h2 className="section-title text-center mb-5">Professional Credentials</h2>
          <div className="row g-4">
            {[
              { abbreviation: 'CFA', full: 'Chartered Financial Analyst', color: 'credential-1' },
              { abbreviation: 'CMT', full: 'Chartered Market Technician', color: 'credential-2' },
              { abbreviation: 'FRM', full: 'Financial Risk Manager', color: 'credential-3' },
              { abbreviation: 'PhD', full: 'Economics & Finance', color: 'credential-4' },
              { abbreviation: 'MBA', full: 'Finance & Analytics', color: 'credential-5' },
              { abbreviation: 'MSc', full: 'Financial Engineering', color: 'credential-6' }
            ].map((credential, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div className={`credential-card ${credential.color}`}>
                  <h3 className="credential-abbr">{credential.abbreviation}</h3>
                  <p className="credential-full">{credential.full}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Teaching Philosophy */}
      <section className="philosophy-section">
        <div className="container py-5">
          <div className="philosophy-container">
            <h2 className="section-title text-center mb-5">Our Teaching Philosophy</h2>
            
            <div className="philosophy-point">
              <h3 className="philosophy-title">Education Over Profits</h3>
              <p className="philosophy-description">
                We focus exclusively on education and skill development, never on guaranteed returns or get-rich-quick promises. 
                Our goal is to build informed, disciplined learners who understand both opportunities and risks in financial markets.
              </p>
            </div>

            <div className="philosophy-point">
              <h3 className="philosophy-title">Research-Backed Methods</h3>
              <p className="philosophy-description">
                Our teaching approaches are grounded in academic research, market history, and proven analytical frameworks. 
                We emphasize systematic thinking over emotional reactions.
              </p>
            </div>

            <div className="philosophy-point">
              <h3 className="philosophy-title">Ethics & Compliance First</h3>
              <p className="philosophy-description">
                Every course emphasizes regulatory compliance, ethical considerations, and responsible market participation. 
                We maintain the highest standards of educational integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Section5);