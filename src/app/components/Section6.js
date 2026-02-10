"use client";

import { memo } from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      {/* Top Section with Gradient Background */}
      <section 
        className="py-5 text-center" 
        style={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)"
        }}
      >
        <div className="container py-5">
          <h1 className="display-5 fw-bold mb-3">Contact Us</h1>
          <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
            Have questions about our educational programs? We're here to help. 
            Reach out to our team for information, support, or partnership inquiries.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Left Column - Get in Touch */}
            <div className="col-lg-6">
              <h2 className="h4 fw-bold mb-4">Get in Touch</h2>
              <p className="text-muted mb-4">
                Whether you're interested in our educational programs, have partnership inquiries, 
                or need support, we'd love to hear from you.
              </p>

              {/* Email Card */}
              <div className="card shadow-sm border-0 rounded-3 mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div 
                      className="rounded-circle p-2 me-3" 
                      style={{ backgroundColor: "#e3f2fd" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1976d2" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="mb-1">education@nupips.com</p>
                      <small className="text-muted">We'll respond within 24-48 hours</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Reach Card */}
              <div className="card shadow-sm border-0 rounded-3 mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div 
                      className="rounded-circle p-2 me-3" 
                      style={{ backgroundColor: "#e8f5e9" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2e7d32" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-1.5 1.562-1.5 1.562-.335.335-.264.468.264.524.595.062 1.042.096 1.402.096.36 0 .807-.034 1.403-.096.528-.056.598-.189.264-.524-.5-.5-1.5-1.562-1.5-1.562-.05-.05.263-.221.743-.484 1.185-.65 3.392-1.86 3.717-3.19C9.818 2.552 8.788 2 8 2s-1.818.552-2.04 2.326Z"/>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Global Reach</h6>
                      <p className="mb-0">Serving learners across Asia, Middle East, Europe, Africa, and the Americas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="card shadow-sm border-0 rounded-3 mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div 
                      className="rounded-circle p-2 me-3" 
                      style={{ backgroundColor: "#f3e5f5" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#7b1fa2" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Office Hours</h6>
                      <p className="mb-0">Monday - Friday<br />9:00 AM - 6:00 PM (GMT)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body p-4">
                  <h4 className="h5 fw-bold mb-4">Send us a Message</h4>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label fw-bold">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="fullName" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label fw-bold">
                        Subject <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        placeholder="Program Inquiry / Partnership / Support"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows="4"
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100 py-2 fw-bold"
                      style={{
                        background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
                        border: "none"
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send me-2" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                      </svg>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Inquiries Section */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h4 fw-bold mb-2">Common Inquiries</h2>
            <p className="text-muted">Quick answers to frequently asked questions</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 rounded-3 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">Program Information</h5>
                  <p className="card-text text-muted mb-0">
                    Questions about our Forex, Stock Market, or Risk Management courses
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 rounded-3 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">Technical Support</h5>
                  <p className="card-text text-muted mb-0">
                    Help with accessing courses, community features, or video content
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 rounded-3 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">Partnership Opportunities</h5>
                  <p className="card-text text-muted mb-0">
                    Interested in academy partnerships or institutional collaborations
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 rounded-3 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">Media & Press</h5>
                  <p className="card-text text-muted mb-0">
                    Press inquiries, interviews, or collaboration requests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="h4 fw-bold text-center mb-5">Frequently Asked Questions</h2>
          
          <div className="accordion" id="faqAccordion">
            {/* FAQ Item 1 */}
            <div className="accordion-item border-0 shadow-sm rounded-3 mb-3">
              <h3 className="accordion-header" id="faqHeading1">
                <button 
                  className="accordion-button collapsed fw-bold py-3" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faqCollapse1"
                >
                  What types of educational programs do you offer?
                </button>
              </h3>
              <div 
                id="faqCollapse1" 
                className="accordion-collapse collapse" 
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We offer comprehensive educational programs in Forex trading, stock market analysis, 
                  technical analysis, fundamental analysis, risk management, and trading psychology. 
                  All programs are designed for educational purposes only.
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="accordion-item border-0 shadow-sm rounded-3 mb-3">
              <h3 className="accordion-header" id="faqHeading2">
                <button 
                  className="accordion-button collapsed fw-bold py-3" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faqCollapse2"
                >
                  Do you provide financial advice or trading signals?
                </button>
              </h3>
              <div 
                id="faqCollapse2" 
                className="accordion-collapse collapse" 
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  No. NUPIPS is strictly an educational platform. We do not provide financial advice, 
                  investment recommendations, or trading signals. All content is for educational purposes only.
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="accordion-item border-0 shadow-sm rounded-3 mb-3">
              <h3 className="accordion-header" id="faqHeading3">
                <button 
                  className="accordion-button collapsed fw-bold py-3" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faqCollapse3"
                >
                  How can I become a partner institution?
                </button>
              </h3>
              <div 
                id="faqCollapse3" 
                className="accordion-collapse collapse" 
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Visit our Academy Partnership Program page to learn about eligibility criteria and benefits. 
                  You can submit a partnership application through our contact form or email us at education@nupips.com.
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="accordion-item border-0 shadow-sm rounded-3 mb-3">
              <h3 className="accordion-header" id="faqHeading4">
                <button 
                  className="accordion-button collapsed fw-bold py-3" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faqCollapse4"
                >
                  Are your courses suitable for beginners?
                </button>
              </h3>
              <div 
                id="faqCollapse4" 
                className="accordion-collapse collapse" 
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes! We offer programs for all levels, from complete beginners to intermediate learners. 
                  Our structured curriculum helps you progress at your own pace.
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="accordion-item border-0 shadow-sm rounded-3 mb-3">
              <h3 className="accordion-header" id="faqHeading5">
                <button 
                  className="accordion-button collapsed fw-bold py-3" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faqCollapse5"
                >
                  What certifications do your instructors have?
                </button>
              </h3>
              <div 
                id="faqCollapse5" 
                className="accordion-collapse collapse" 
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  All our instructors hold professional certifications such as CFA, CMT, FRM, and have extensive 
                  real-world experience in financial markets. Visit our Experts page to learn more about our faculty.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Notice */}
      <section className="py-3">
        <div className="container">
          <div 
            className="alert alert-warning border-0 rounded-3" 
            style={{ backgroundColor: "#fff8e1" }}
            role="alert"
          >
            <div className="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-exclamation-triangle-fill text-warning me-3" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <div>
                <strong>Important Notice:</strong> Please note that NUPIPS provides educational services only. 
                We do not offer financial advice, investment recommendations, or trading signals. 
                All inquiries related to such services cannot be addressed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bootstrap JavaScript for accordion */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default memo(ContactUs);