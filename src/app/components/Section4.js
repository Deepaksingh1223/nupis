import { memo } from "react"; 
const Section4 = () => {
  return (
    <section className={styles.financeEducationSection}>
      {/* Bootstrap CSS via CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
      />

      {/* Expert Educators Section */}
      <div className="container">
        <div className="text-center mb-5">
          <h1 className={styles.sectionTitle}>Meet Our Expert Educators</h1>
          <p className={styles.sectionSubtitle}>
            Learn from verified professionals with decades of combined experience in financial markets, 
            technical analysis, risk management, and behavioral finance.
          </p>
        </div>

        {/* Educator Cards Grid */}
        <div className="row g-4">
          {/* Dr. Michael Chen */}
          <div className="col-lg-6">
            <div className={styles.educatorCard}>
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className={styles.profileImageContainer}>
                    <div className={styles.profileImage}>
                      <i className={`bi bi-person-badge ${styles.profileIcon}`}></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className={styles.educatorName}>Dr. Michael Chen</h3>
                  <p className={styles.educatorRole}>Senior Forex Educator</p>
                  
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className={`bi bi-mortarboard ${styles.credentialIcon}`}></i>
                    <span className={styles.credentialText}>PhD in Economics, CFA, CMT</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="mb-1"><strong>Specialization:</strong> Currency Markets & Technical Analysis</p>
                    <p className="mb-3"><strong>Experience:</strong> 15+ years</p>
                  </div>
                  
                  <p className={styles.educatorDescription}>
                    Specialized in forex market structure, technical analysis methodologies, 
                    and risk management strategies for currency trading.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sarah Johnson */}
          <div className="col-lg-6">
            <div className={styles.educatorCard}>
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className={styles.profileImageContainer}>
                    <div className={styles.profileImage}>
                      <i className={`bi bi-person-badge ${styles.profileIcon}`}></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className={styles.educatorName}>Sarah Johnson</h3>
                  <p className={styles.educatorRole}>Stock Market Analyst</p>
                  
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className={`bi bi-award ${styles.credentialIcon}`}></i>
                    <span className={styles.credentialText}>MBA Finance, CFA Level III</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="mb-1"><strong>Specialization:</strong> Equity Analysis & Fundamental Research</p>
                    <p className="mb-3"><strong>Experience:</strong> 12+ years</p>
                  </div>
                  
                  <p className={styles.educatorDescription}>
                    Expert in fundamental analysis, portfolio management concepts, 
                    and equity market cycles with focus on long-term value investing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* David Martinez */}
          <div className="col-lg-6">
            <div className={styles.educatorCard}>
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className={styles.profileImageContainer}>
                    <div className={styles.profileImage}>
                      <i className={`bi bi-person-badge ${styles.profileIcon}`}></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className={styles.educatorName}>David Martinez</h3>
                  <p className={styles.educatorRole}>Risk Management Specialist</p>
                  
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className={`bi bi-file-earmark-text ${styles.credentialIcon}`}></i>
                    <span className={styles.credentialText}>MSc Financial Engineering, FRM</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="mb-1"><strong>Specialization:</strong> Trading Psychology & Risk Control</p>
                    <p className="mb-3"><strong>Experience:</strong> 10+ years</p>
                  </div>
                  
                  <p className={styles.educatorDescription}>
                    Focuses on behavioral finance, trading psychology, position sizing, 
                    and systematic risk management approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prof. Lisa Anderson */}
          <div className="col-lg-6">
            <div className={styles.educatorCard}>
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className={styles.profileImageContainer}>
                    <div className={styles.profileImage}>
                      <i className={`bi bi-person-badge ${styles.profileIcon}`}></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className={styles.educatorName}>Prof. Lisa Anderson</h3>
                  <p className={styles.educatorRole}>Behavioral Finance Expert</p>
                  
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className={`bi bi-mortarboard ${styles.credentialIcon}`}></i>
                    <span className={styles.credentialText}>PhD Behavioral Economics</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="mb-1"><strong>Specialization:</strong> Market Psychology & Decision Making</p>
                    <p className="mb-3"><strong>Experience:</strong> 18+ years</p>
                  </div>
                  
                  <p className={styles.educatorDescription}>
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
      <div className={styles.expertiseSection}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
            <p className={styles.sectionSubtitle}>
              Our faculty covers all essential aspects of financial markets education.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h4 className={styles.expertiseTitle}>Currency Markets</h4>
                <p className={styles.expertiseDescription}>
                  Forex fundamentals, pair analysis, and market structure
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>
                  <i className="bi bi-mortarboard"></i>
                </div>
                <h4 className={styles.expertiseTitle}>Equity Analysis</h4>
                <p className={styles.expertiseDescription}>
                  Stock market fundamentals and valuation methods
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4 className={styles.expertiseTitle}>Risk Control</h4>
                <p className={styles.expertiseDescription}>
                  Position sizing, portfolio risk, and money management
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>
                  <i className="bi bi-brain"></i>
                </div>
                <h4 className={styles.expertiseTitle}>Psychology</h4>
                <p className={styles.expertiseDescription}>
                  Behavioral finance and emotional discipline
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Credentials Section */}
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className={styles.sectionTitle}>Professional Credentials</h2>
          <p className={styles.sectionSubtitle}>
            Our educators hold recognized industry certifications and advanced degrees.
          </p>
        </div>

        <div className="row g-4">
          {[
            { title: "CFA", description: "Chartered Financial Analyst", icon: "bi-award" },
            { title: "CMT", description: "Chartered Market Technician", icon: "bi-graph-up-arrow" },
            { title: "FRM", description: "Financial Risk Manager", icon: "bi-shield-check" },
            { title: "PhD", description: "Economics & Finance", icon: "bi-mortarboard" },
            { title: "MBA", description: "Finance & Analytics", icon: "bi-journal-text" },
            { title: "MSc", description: "Financial Engineering", icon: "bi-file-earmark-text" }
          ].map((credential, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={styles.credentialCard}>
                <div className={styles.credentialIcon}>
                  <i className={`bi ${credential.icon}`}></i>
                </div>
                <h4 className={styles.credentialTitle}>{credential.title}</h4>
                <p className={styles.credentialDescription}>{credential.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Philosophy Section */}
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className={styles.sectionTitle}>Our Teaching Philosophy</h2>
        </div>

        <div className={styles.philosophyCard}>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className={styles.philosophyItem}>
                <div className={styles.philosophyIcon}>
                  <i className="bi bi-scale"></i>
                </div>
                <h4 className={styles.philosophyTitle}>Education Over Profits</h4>
                <p className={styles.philosophyDescription}>
                  We focus exclusively on education and skill development, never on guaranteed returns 
                  or get-rich-quick promises. Our goal is to build informed, disciplined learners who 
                  understand both opportunities and risks in financial markets.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={styles.philosophyItem}>
                <div className={styles.philosophyIcon}>
                  <i className="bi bi-journal-text"></i>
                </div>
                <h4 className={styles.philosophyTitle}>Research-Backed Methods</h4>
                <p className={styles.philosophyDescription}>
                  Our teaching approaches are grounded in academic research, market history, 
                  and proven analytical frameworks. We emphasize systematic thinking over 
                  emotional reactions.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={styles.philosophyItem}>
                <div className={styles.philosophyIcon}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4 className={styles.philosophyTitle}>Ethics & Compliance First</h4>
                <p className={styles.philosophyDescription}>
                  Every course emphasizes regulatory compliance, ethical considerations, 
                  and responsible market participation. We maintain the highest standards 
                  of educational integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Section4);