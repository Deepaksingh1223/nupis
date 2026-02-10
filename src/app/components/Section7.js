"use client";

import { memo, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section7 = () => {
  const [acknowledged, setAcknowledged] = useState(false);

  const disclaimerPoints = [
    {
      title: "Educational Purpose Only",
      text: "All content is for educational purposes and should not be construed as financial advice or investment recommendations."
    },
    {
      title: "No Guaranteed Returns",
      text: "We make no claims or guarantees about potential profits, returns, or trading performance. Past performance does not indicate future results."
    },
    {
      title: "Market Risk",
      text: "Trading and investing in financial markets involves substantial risk of loss. You may lose some or all of your invested capital."
    },
    {
      title: "Personal Responsibility",
      text: "Any decisions you make regarding trading or investing are your sole responsibility. You should conduct your own research and consider consulting with licensed financial advisors."
    },
    {
      title: "No Professional Relationship",
      text: "Participation in our educational programs does not create an advisor-client, broker-dealer, or fiduciary relationship."
    },
    {
      title: "Regulatory Compliance",
      text: "Users are responsible for complying with their local financial regulations and laws regarding trading and investment activities."
    },
    {
      title: "Age Restriction",
      text: "Our services are available only to individuals aged 18 years and older."
    },
    {
      title: "Content Accuracy",
      text: "While we strive for accuracy, we do not guarantee that all information is current, complete, or error-free."
    }
  ];

  const riskWarningPoints = [
    "Assess your financial situation and risk tolerance.",
    "Only invest money you can afford to lose.",
    "Understand the specific risks of each market and instrument.",
    "Consider seeking advice from licensed financial professionals.",
    "Start with education before committing capital."
  ];

  const notFinancialAdvicePoints = [
    "Financial, investment, or trading advice.",
    "Recommendations to buy or sell specific securities or currencies.",
    "Predictions of future market performance.",
    "Guarantees of profits or returns.",
    "Professional financial planning services."
  ];

  const compliancePoints = [
    "Understanding and complying with their local financial regulations.",
    "Obtaining necessary licenses or permissions for trading activities.",
    "Reporting income and paying applicable taxes on trading activities.",
    "Working only with properly regulated brokers and financial institutions."
  ];

  return (
    <div className="legal-disclaimer-page">
      {/* Custom CSS */}
      <style jsx global>{`
        .legal-disclaimer-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        
        .disclaimer-header {
          background: linear-gradient(135deg, #fef9e7 0%, #fcf3cf 100%);
          padding: 80px 0;
          border-bottom: 2px solid #f1c40f;
        }
        
        .warning-icon {
          font-size: 48px;
          color: #e74c3c;
          margin-bottom: 20px;
        }
        
        .disclaimer-title {
          color: #2c3e50;
          font-weight: 700;
          font-size: 42px;
          margin-bottom: 15px;
        }
        
        .disclaimer-subtitle {
          color: #7f8c8d;
          font-size: 18px;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .highlight-card {
          background: linear-gradient(135deg, #fadbd8 0%, #f5c6cb 100%);
          border: none;
          border-radius: 12px;
          margin-top: -40px;
          position: relative;
          z-index: 1;
        }
        
        .highlight-card-title {
          color: #c0392b;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .section-title {
          color: #2c3e50;
          font-weight: 700;
          margin: 60px 0 40px;
          position: relative;
          padding-bottom: 15px;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(to right, #3498db, #2ecc71);
        }
        
        .disclaimer-card {
          border: none;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          background: #f8f9fa;
        }
        
        .disclaimer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
        
        .card-icon {
          width: 40px;
          height: 40px;
          background: #e3f2fd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
        }
        
        .card-icon.warning {
          background: #fdebd0;
          color: #e67e22;
        }
        
        .card-icon.info {
          background: #e8f6f3;
          color: #1abc9c;
        }
        
        .risk-warning-card {
          background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
          border: 2px solid #ffc107;
          border-radius: 12px;
        }
        
        .risk-warning-title {
          color: #d35400;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .warning-list {
          padding-left: 20px;
        }
        
        .warning-list li {
          margin-bottom: 10px;
          position: relative;
        }
        
        .warning-list li::before {
          content: '⚠️';
          position: absolute;
          left: -20px;
        }
        
        .white-card {
          background: white;
          border: none;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        .white-card-title {
          color: #2c3e50;
          font-weight: 700;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #ecf0f1;
        }
        
        .bullet-list {
          padding-left: 20px;
        }
        
        .bullet-list li {
          margin-bottom: 10px;
          position: relative;
        }
        
        .bullet-list li::before {
          content: '•';
          color: #3498db;
          font-weight: bold;
          position: absolute;
          left: -15px;
        }
        
        .acknowledgment-box {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          border-radius: 12px;
          padding: 40px;
          margin-top: 60px;
        }
        
        .acknowledgment-title {
          color: white;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .checkbox-label {
          color: #ecf0f1;
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          margin-bottom: 25px;
        }
        
        .checkbox-input {
          margin-right: 10px;
          margin-top: 3px;
        }
        
        .acknowledge-btn {
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px 30px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          display: block;
          margin: 0 auto;
          min-width: 200px;
        }
        
        .acknowledge-btn:hover {
          background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        
        .acknowledge-btn:disabled {
          background: #7f8c8d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #ddd, transparent);
          margin: 40px 0;
        }
        
        @media (max-width: 768px) {
          .disclaimer-title {
            font-size: 32px;
          }
          
          .disclaimer-header {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 28px;
            margin: 40px 0 30px;
          }
          
          .acknowledgment-box {
            padding: 30px 20px;
          }
        }
      `}</style>

      {/* Header Section */}
      <section className="disclaimer-header">
        <div className="container">
          <div className="text-center">
            <div className="warning-icon">⚠️</div>
            <h1 className="disclaimer-title">Important Legal Disclaimer</h1>
            <p className="disclaimer-subtitle">
              Please read this disclaimer carefully before accessing any NUPIPS educational content or programs.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Highlight Card - Educational Purpose Only */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="card highlight-card shadow-lg mt-4">
              <div className="card-body p-4">
                <h2 className="highlight-card-title text-center h4">Educational Purpose Only</h2>
                <p className="card-text text-center mb-0">
                  NUPIPS is an educational platform exclusively focused on providing knowledge about financial markets, including Forex and Stock Markets. 
                  We do not provide financial advice, investment recommendations, or any form of investment services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* Key Disclaimer Points */}
        <h2 className="section-title text-center">Key Disclaimer Points</h2>
        
        <div className="row g-4">
          {disclaimerPoints.map((point, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card disclaimer-card">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className={`card-icon ${index < 3 ? 'warning' : 'info'}`}>
                      {index < 3 ? '⚠️' : 'ℹ️'}
                    </div>
                    <h5 className="card-title fw-bold mb-0" style={{ color: '#2c3e50' }}>
                      {point.title}
                    </h5>
                  </div>
                  <p className="card-text" style={{ color: '#5d6d7e' }}>
                    {point.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        {/* Risk Warning Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="card risk-warning-card shadow-sm">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div className="warning-icon" style={{ fontSize: '32px' }}>⚠️</div>
                  <h3 className="risk-warning-title">Risk Warning</h3>
                </div>
                <p className="card-text mb-4">
                  <strong>Trading and investing in financial markets carries substantial risk.</strong> You can lose some or all of your invested capital. Market conditions are unpredictable and can change rapidly.
                </p>
                <p className="fw-bold mb-3">Before engaging in any trading or investment activity, you should:</p>
                <ul className="warning-list">
                  {riskWarningPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p className="card-text mt-4 fst-italic">
                  NUPIPS provides education only. All trading and investment decisions are your sole responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          {/* Not Financial Advice Card */}
          <div className="col-lg-6">
            <div className="card white-card">
              <div className="card-body p-4">
                <h4 className="white-card-title">Not Financial Advice</h4>
                <p className="card-text mb-4">
                  No content provided by NUPIPS—including videos, articles, courses, webinars, or community discussions—should be interpreted as:
                </p>
                <ul className="bullet-list">
                  {notFinancialAdvicePoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p className="card-text mt-4">
                  Our educators share knowledge and frameworks for understanding markets. Application of this knowledge is entirely at your discretion and risk.
                </p>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance Card */}
          <div className="col-lg-6">
            <div className="card white-card">
              <div className="card-body p-4">
                <h4 className="white-card-title">Regulatory Compliance</h4>
                <p className="card-text mb-4">
                  Financial markets are regulated differently in various jurisdictions. Users are responsible for:
                </p>
                <ul className="bullet-list">
                  {compliancePoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p className="card-text mt-4">
                  NUPIPS does not provide regulatory, legal, or tax advice. Consult with appropriate professionals in your jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Acknowledgement Section */}
        <div className="acknowledgment-box">
          <h3 className="acknowledgment-title">Acknowledgement Required</h3>
          <p className="text-white text-center mb-4">
            By accessing NUPIPS's educational content and programs, you acknowledge that you have read, understood, and agree to this disclaimer.
          </p>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
            />
            <span>
              I confirm that I have read, understood, and agree to all terms in this legal disclaimer. 
              I accept full responsibility for my educational journey and any subsequent trading or investment decisions.
            </span>
          </label>
          
          <button
            className="acknowledge-btn"
            disabled={!acknowledged}
            onClick={() => {
              if (acknowledged) {
                alert('Thank you for acknowledging the disclaimer. You may now proceed.');
              }
            }}
          >
            I Acknowledge and Accept
          </button>
          
          <div className="text-center mt-4">
            <a 
              href="#" 
              className="text-light"
              style={{ opacity: 0.8, fontSize: '14px' }}
            >
              Link to NUPIPS Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Section7);
