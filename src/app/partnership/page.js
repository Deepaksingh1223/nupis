"use client";

import { memo, useState } from "react";
import Image from 'next/image';
const Section2 = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of institutions are eligible for the partnership?",
      answer: "We partner with accredited educational institutions including universities, colleges, vocational schools, and professional training centers. Both public and private institutions are welcome to apply."
    },
    {
      question: "Is there any cost associated with the partnership program?",
      answer: "The partnership program is designed to be accessible. While some premium features may have associated costs, the basic partnership including curriculum materials and consultation is available at no cost for qualified institutions."
    },
    {
      question: "How long does the partnership approval process take?",
      answer: "The approval process typically takes 2-4 weeks from application submission. This includes review of your institution's credentials, consultation calls, and program customization discussions."
    },
    {
      question: "Can we customize the curriculum for our specific needs?",
      answer: "Yes, absolutely! One of the key benefits of our partnership is the ability to customize the curriculum to match your institution's specific requirements, student demographics, and educational objectives."
    },
    {
      question: "What support is provided for faculty training?",
      answer: "We provide comprehensive faculty training including workshops, teaching materials, ongoing mentorship, and access to our educator community. Training can be conducted online or in-person at your institution."
    },
    {
      question: "Are the certifications recognized internationally?",
      answer: "Yes, our certification programs are recognized globally and can add significant value to your students' credentials, enhancing their career prospects in financial markets."
    }
  ];

  return (
    <div className="academy-partnership-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-md-6">
                <h1 className="hero-title1 text-dark">Academy Partnership Program</h1>
                <p className="hero-description text-gray">
                  Partner with NUPIPS to bring world-class financial markets education to your institution.
                  Co-branded programs, certified curricula, and comprehensive support.
                </p>
                <button className="apply-button">
                  Apply for Partnership →
                </button>
              </div>
              <div className="col-md-6">
                <div className="hero-visual">
                  <div className="placeholder-visual">
                    <div className="visual-content">
                      <Image
                        src="/assets/img/partnership-img.png"
                        alt="Partnership"
                        width={600}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partnership Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Partnership Benefits</h2>
            <p className="section-subtitle">
              Comprehensive support for integrating financial education into your curriculum
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="benefit-title">Co-Branded Educational Programs</h3>
              <p className="benefit-description">
                Develop custom financial education curricula tailored to your institution's needs and student demographics.
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20H21" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9599 4.1882C20.0665 4.44558 20.1213 4.72142 20.1213 5C20.1213 5.27858 20.0665 5.55442 19.9599 5.8118C19.8532 6.06917 19.697 6.30302 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="benefit-title">Curriculum Integration Support</h3>
              <p className="benefit-description">
                Comprehensive materials, lesson plans, and teaching resources for seamless integration into existing programs.
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="benefit-title">Certified Education Programs</h3>
              <p className="benefit-description">
                Offer recognized certification programs to your students upon completion of structured learning modules.
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="benefit-title">Faculty Training & Development</h3>
              <p className="benefit-description">
                Professional development sessions for your educators on financial markets education best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="included-section">
        <div className="container">
          <div className="included-wrapper">
            <div className="included-visual">
              <div className="included-image-placeholder">
                <Image
                  src="/assets/img/Included-img.png"
                  alt="Partnership"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            <div className="included-list">
              <h3 className="section-title-left">What's Included</h3>

              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">Structured Curriculum</h4>
                    <p className="feature-description">
                      Complete course materials covering Forex, stock markets, risk management, and trading psychology
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">Teaching Resources</h4>
                    <p className="feature-description">
                      Lesson plans, presentation slides, case studies, and assessment materials
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">Certification Programs</h4>
                    <p className="feature-description">
                      Recognized certificates for students completing structured learning modules
                    </p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="eligibility-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Eligibility Criteria</h2>
            <p className="section-subtitle">
              We partner with accredited institutions committed to quality education
            </p>
          </div>

          <div className="eligibility-cards">
            <div className="eligibility-card">
              <h3 className="eligibility-card-title">Institutional Requirements</h3>
              <ul className="criteria-list">
                <li>
                  <div className="bullet-icon">✓</div>
                  <span>Accredited educational institution</span>
                </li>
                <li>
                  <div className="bullet-icon">✓</div>
                  <span>Minimum 50 students enrolled</span>
                </li>
                <li>
                  <div className="bullet-icon">✓</div>
                  <span>Dedicated faculty for program delivery</span>
                </li>
                <li>
                  <div className="bullet-icon">✓</div>
                  <span>Compliance with local education regulations</span>
                </li>
              </ul>
            </div>

            <div className="eligibility-card">
              <h3 className="eligibility-card-title">Program Alignment</h3>
              <ul className="criteria-list">
                <li>
                  <div className="bullet-icon">✓</div>
                  <span>Focus on education, not trading services</span>
                </li>
                <li>
                  <div className="bullet-icon">✓</div>
                  <span>Commitment to ethical teaching practices</span>
                </li>
                <li>
                  <div className="bullet-icon">✓</div>
                  <span>Age restriction enforcement (18+)</span>
                </li>
                <li>
                  <div className="bullet-icon">✓</div>
                  <span>Clear disclaimer and compliance messaging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Application Process</h2>
            <p className="section-subtitle">
              Simple, streamlined partnership application
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4 className="step-title">Submit Application</h4>
                <p className="step-description">
                  Complete the partnership inquiry form with institutional details and program requirements.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4 className="step-title">Initial Consultation</h4>
                <p className="step-description">
                  Meet with our partnership team to discuss your needs, goals, and curriculum integration.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4 className="step-title">Program Customization</h4>
                <p className="step-description">
                  Work together to customize curriculum, materials, and certification programs for your institution.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4 className="step-title">Launch & Support</h4>
                <p className="step-description">
                  Faculty training, materials delivery, and ongoing support as you launch the program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our partnership program
            </p>
          </div>

          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <div className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-footer">
            <p className="faq-contact-text">
              Still have questions? Contact our partnership team at{" "}
              <a href="mailto:partnerships@nupips.com" className="faq-contact-link">
                partnerships@nupips.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title text-white">Ready to Transform Financial Education at Your Institution?</h2>
            <p className="cta-description">
              Join hundreds of institutions worldwide who are already partnering with NUPIPS
              to provide cutting-edge financial markets education.
            </p>
            <button className="cta-button">
              Start Your Partnership Application Today →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Section2);