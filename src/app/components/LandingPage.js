'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // className="landing-page"
    <div>
      <section className="fin-edu-hero-section">
        <div className="fin-edu-background-layer">
          <div className="fin-edu-dark-bg"></div>
          <div className="fin-edu-gradient-blur"></div>
        </div>

        <div className="fin-edu-content-container">
          <div className="fin-edu-warning-badge">
            <i className="fas fa-book-open"></i>   Educational Purposes Only - No Financial Advice
          </div>

          <h1 className="fin-edu-primary-heading">
            Master Your<br />
            <span className="fin-edu-accent-gradient">Financial Future</span>
          </h1>

          <h2 className="fin-edu-secondary-heading">Through Education</h2>

          <p className="fin-edu-paragraph-text">
            Expert-led courses in <span className='span1'>Forex education</span>, <span className='span2'> Stock market fundamentals </span>, <span className='span3'>
              trading psychology </span> , and <span className='span4'>risk management </span>.
            Build knowledge, not promises.
          </p>

          <div className="fin-edu-action-buttons">
            <a href="#education" className="fin-edu-primary-action">
              <i className="fas fa-book-open"></i> Explore Education
            </a>
            <a href="#community" className="fin-edu-secondary-action">
              <i className="fas fa-users"></i> Join Community
            </a>
          </div>

          <div className="fin-edu-statistics-row">
            <div className="fin-edu-stat-card">
              <div className="fin-edu-stat-value">15K+</div>
              <div className="fin-edu-stat-title">Active Students</div>
            </div>
            <div className="fin-edu-stat-card">
              <div className="fin-edu-stat-value">200+</div>
              <div className="fin-edu-stat-title">Expert Lessons</div>
            </div>
            <div className="fin-edu-stat-card">
              <div className="fin-edu-stat-value">4.8★</div>
              <div className="fin-edu-stat-title">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-6"><div className="text-center mb-16"><span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">WHY CHOOSE NUPIPS</span><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Build Financial Literacy<span className="block text-blue-600">That Lasts a Lifetime</span></h2><p className="text-xl text-gray-600 max-w-3xl mx-auto">Our education-first approach focuses on building genuine understanding of financial markets, risk management, and trading psychology.</p></div><div className="grid md:grid-cols-3 gap-8"><div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"><div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6"><i className="ri-graduation-cap-line text-blue-600 text-2xl"></i></div><h3 className="text-2xl font-bold text-gray-900 mb-4">Expert-Led Curriculum</h3><p className="text-gray-600 mb-6 leading-relaxed">Learn from verified educators with real market experience. Our faculty includes certified analysts, risk management specialists, and behavioral finance experts.</p><a className="text-blue-600 font-semibold hover:text-blue-700 transition-colors" href="/preview/8dd92c6f-31c3-443e-b924-e2df9f3074e4/5941968/experts" data-discover="true">Meet Our Experts →</a></div><div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform md:-translate-y-4"><div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6"><i className="ri-shield-check-line text-amber-600 text-2xl"></i></div><h3 className="text-2xl font-bold text-gray-900 mb-4">Risk-Focused Learning</h3><p className="text-gray-600 mb-6 leading-relaxed">Understand market risks before opportunities. We emphasize responsible learning with clear disclaimers and realistic expectations about market volatility.</p><a className="text-blue-600 font-semibold hover:text-blue-700 transition-colors" href="/preview/8dd92c6f-31c3-443e-b924-e2df9f3074e4/5941968/disclaimer" data-discover="true">Read Disclaimer →</a></div><div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"><div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6"><i className="ri-community-line text-green-600 text-2xl"></i></div><h3 className="text-2xl font-bold text-gray-900 mb-4">Global Community</h3><p className="text-gray-600 mb-6 leading-relaxed">Connect with learners across Asia, Middle East, Europe, Africa, and the Americas. Share insights, discuss strategies, and learn together.</p><a className="text-blue-600 font-semibold hover:text-blue-700 transition-colors" href="/preview/8dd92c6f-31c3-443e-b924-e2df9f3074e4/5941968/community" data-discover="true">Join Community →</a></div></div></div></section>
      {/* Education Programs Section */}
      <section className="section programs bg-light">
        <div className="container">
          <h2 className="section-title1">Comprehensive Financial Education</h2>
          <p className="section-subtitle">
            Structured learning programs designed for students, professionals, and aspiring traders worldwide.
          </p>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon purple">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Forex Education</h3>
              <p>Currency markets, technical analysis, and systematic trading approaches</p>
            </div>

            <div className="program-card">
              <div className="program-icon blue">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3>Stock Market</h3>
              <p>Equity fundamentals, chart analysis, and portfolio management concepts</p>
            </div>

            <div className="program-card">
              <div className="program-icon teal">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Risk Management</h3>
              <p>Position sizing, portfolio protection, and systematic risk control</p>
            </div>

            <div className="program-card">
              <div className="program-icon green">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Community Learning</h3>
              <p>Peer discussions, live sessions, and collaborative study programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="section experts">
        <div className="container">
          <div className="experts-grid">
            <div className="experts-image">
              <div className="image-placeholder">
                <Image src="/assets/img/Learn-From.png"
                  alt="Partnership"
                  width={600}
                  height={600}
                />
              </div>
            </div>

            <div className="experts-content">
              <h2 className="section-title2 text-left">Learn From Verified Experts</h2>
              <p className="section-subtitle text-left">
                Our faculty consists of experienced educators with decades of combined expertise in financial markets, technical analysis, and risk management.
              </p>

              <ul className="expert-list">
                <li>
                  <i className="fas fa-check-circle text-teal"></i>
                  <span>CFA, CMT, and PhD-qualified educators</span>
                </li>
                <li>
                  <i className="fas fa-check-circle text-teal"></i>
                  <span>Research-backed teaching methodologies</span>
                </li>
                <li>
                  <i className="fas fa-check-circle text-teal"></i>
                  <span>Ethics-first, compliance-focused approach</span>
                </li>
              </ul>

              <a href="#experts" className="btn btn-primary">
                <i className="fas fa-user-tie"></i> Meet Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials bg-light">
        <div className="container">
          <h2 className="section-title3">What Our Learners Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied students who have transformed their financial education journey with nupips.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                {'★'.repeat(5)}
              </div>
              <p className="testimonial-text">
                "The risk management course completely changed my approach to trading. The emphasis on education over profits is refreshing."
              </p>
              <div className="testimonial-author">

                <div>
                  <div className="author-name">Alex Chen</div>
                  <div className="author-title">Financial Analyst</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                {'★'.repeat(5)}
              </div>
              <p className="testimonial-text">
                "As a beginner, I appreciated the structured learning path. The community support made complex concepts easier to grasp."
              </p>
              <div className="testimonial-author">

                <div>
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Software Engineer</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                {'★'.repeat(5)}
              </div>
              <p className="testimonial-text">
                "The expert faculty brings real-world experience that you won't find in textbooks. Worth every penny for serious learners."
              </p>
              <div className="testimonial-author">

                <div>
                  <div className="author-name">Michael Rodriguez</div>
                  <div className="author-title">Business Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container text-center">
          <h2 className="cta-title text-white">Ready to Start Your Financial Education Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of learners worldwide in our structured, professional education programs.
          </p>

          <div className="cta-buttons">
            <a href="#programs" className="footer-btn">
              <i className="fas fa-graduation-cap"></i> Explore Programs
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-envelope"></i> Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>

  );
};

export default LandingPage;