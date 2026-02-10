import { memo } from "react"; 
 

const AcademyPartnershipProgram = () => {
  return (
    <div className="academy-partnership-page">
      {/* Hero Section */}
      <section className="academy-hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="academy-hero-text mb-4 mb-lg-0">
              <h1 className="academy-hero-title display-5 fw-bold mb-4">
                Academy Partnership Program
              </h1>
              <p className="academy-hero-description lead mb-4">
                Partner with NUPIPS to bring world-class financial markets education to your institution. Co-branded programs, certified curricula, and comprehensive support.
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="academy-cta-button fw-bold px-4 py-3"
              >
                Apply for Partnership →
              </Button>
            </Col>
            <Col lg={6} className="academy-hero-image">
              {/* Replace with actual image */}
              <div className="academy-image-placeholder bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: "350px" }}>
                <span className="text-muted">Hero Image</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="academy-divider my-4">
        <Container>
          <hr className="academy-divider-line my-0" />
        </Container>
      </div>

      {/* Partnership Benefits Section */}
      <section className="academy-benefits-section py-5">
        <Container>
          <div className="academy-section-header text-center mb-5">
            <h2 className="academy-section-title fw-bold mb-3">Partnership Benefits</h2>
            <p className="academy-section-subtitle text-muted">
              Comprehensive support for integrating financial education into your curriculum
            </p>
          </div>

          <Row className="g-4 academy-benefits-grid">
            <Col md={6} lg={3} className="academy-benefit-col">
              <Card className="academy-benefit-card h-100 border-0 shadow-sm rounded-3">
                <Card.Body className="p-4">
                  <div className="academy-benefit-icon mb-3">
                    <i className="bi bi-journal-text fs-1 academy-primary-color"></i>
                  </div>
                  <h5 className="academy-benefit-title fw-bold mb-3">
                    Co-Branded Educational Programs
                  </h5>
                  <p className="academy-benefit-description text-muted mb-0">
                    Develop custom financial education curricula tailored to your institution's needs and student demographics.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="academy-benefit-col">
              <Card className="academy-benefit-card h-100 border-0 shadow-sm rounded-3">
                <Card.Body className="p-4">
                  <div className="academy-benefit-icon mb-3">
                    <i className="bi bi-book-half fs-1 academy-primary-color"></i>
                  </div>
                  <h5 className="academy-benefit-title fw-bold mb-3">
                    Curriculum Integration Support
                  </h5>
                  <p className="academy-benefit-description text-muted mb-0">
                    Comprehensive materials, lesson plans, and teaching resources for seamless integration into existing programs.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="academy-benefit-col">
              <Card className="academy-benefit-card h-100 border-0 shadow-sm rounded-3">
                <Card.Body className="p-4">
                  <div className="academy-benefit-icon mb-3">
                    <i className="bi bi-award fs-1 academy-primary-color"></i>
                  </div>
                  <h5 className="academy-benefit-title fw-bold mb-3">
                    Certified Education Programs
                  </h5>
                  <p className="academy-benefit-description text-muted mb-0">
                    Offer recognized certification programs to your students upon completion of structured learning modules.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="academy-benefit-col">
              <Card className="academy-benefit-card h-100 border-0 shadow-sm rounded-3">
                <Card.Body className="p-4">
                  <div className="academy-benefit-icon mb-3">
                    <i className="bi bi-person-badge fs-1 academy-primary-color"></i>
                  </div>
                  <h5 className="academy-benefit-title fw-bold mb-3">
                    Faculty Training & Development
                  </h5>
                  <p className="academy-benefit-description text-muted mb-0">
                    Professional development sessions for your educators on financial markets education best practices.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What's Included Section */}
      <section className="academy-included-section py-5 academy-bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="academy-included-image mb-4 mb-lg-0">
              <div className="academy-image-placeholder rounded-3 bg-white shadow-sm d-flex align-items-center justify-content-center" style={{ height: "400px" }}>
                <span className="text-muted">Educational Materials Image</span>
              </div>
            </Col>
            <Col lg={7} className="academy-included-list">
              <h3 className="academy-included-title fw-bold mb-4">What's Included</h3>
              
              <ListGroup variant="flush" className="academy-checklist">
                <ListGroup.Item className="academy-checklist-item border-0 py-3 ps-0 bg-transparent">
                  <div className="d-flex">
                    <div className="academy-check-icon me-3">
                      <i className="bi bi-check-circle-fill academy-success-color fs-4"></i>
                    </div>
                    <div>
                      <h6 className="academy-list-title fw-bold mb-1">Structured Curriculum</h6>
                      <p className="academy-list-description text-muted mb-0">
                        Complete course materials covering Forex, stock markets, risk management, and trading psychology
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="academy-checklist-item border-0 py-3 ps-0 bg-transparent">
                  <div className="d-flex">
                    <div className="academy-check-icon me-3">
                      <i className="bi bi-check-circle-fill academy-success-color fs-4"></i>
                    </div>
                    <div>
                      <h6 className="academy-list-title fw-bold mb-1">Teaching Resources</h6>
                      <p className="academy-list-description text-muted mb-0">
                        Lesson plans, presentation slides, case studies, and assessment materials
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="academy-checklist-item border-0 py-3 ps-0 bg-transparent">
                  <div className="d-flex">
                    <div className="academy-check-icon me-3">
                      <i className="bi bi-check-circle-fill academy-success-color fs-4"></i>
                    </div>
                    <div>
                      <h6 className="academy-list-title fw-bold mb-1">Certification Programs</h6>
                      <p className="academy-list-description text-muted mb-0">
                        Recognized certificates for students completing structured learning modules
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="academy-checklist-item border-0 py-3 ps-0 bg-transparent">
                  <div className="d-flex">
                    <div className="academy-check-icon me-3">
                      <i className="bi bi-check-circle-fill academy-success-color fs-4"></i>
                    </div>
                    <div>
                      <h6 className="academy-list-title fw-bold mb-1">Ongoing Support</h6>
                      <p className="academy-list-description text-muted mb-0">
                        Regular updates, new content, and dedicated partnership support team
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="academy-checklist-item border-0 py-3 ps-0 bg-transparent">
                  <div className="d-flex">
                    <div className="academy-check-icon me-3">
                      <i className="bi bi-check-circle-fill academy-success-color fs-4"></i>
                    </div>
                    <div>
                      <h6 className="academy-list-title fw-bold mb-1">Faculty Training</h6>
                      <p className="academy-list-description text-muted mb-0">
                        Professional development workshops for your educators on financial markets education
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="academy-checklist-item border-0 py-3 ps-0 bg-transparent">
                  <div className="d-flex">
                    <div className="academy-check-icon me-3">
                      <i className="bi bi-check-circle-fill academy-success-color fs-4"></i>
                    </div>
                    <div>
                      <h6 className="academy-list-title fw-bold mb-1">Co-Branded Materials</h6>
                      <p className="academy-list-description text-muted mb-0">
                        Customized content featuring both NUPIPS and your institution's branding
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="academy-eligibility-section py-5">
        <Container>
          <div className="academy-section-header text-center mb-5">
            <h2 className="academy-section-title fw-bold mb-3">Eligibility Criteria</h2>
            <p className="academy-section-subtitle text-muted">
              We partner with accredited institutions committed to quality education
            </p>
          </div>

          <Row className="g-4 academy-eligibility-grid">
            <Col lg={6} className="academy-eligibility-col">
              <Card className="academy-eligibility-card h-100 border rounded-3">
                <Card.Body className="p-4">
                  <h4 className="academy-eligibility-card-title fw-bold mb-4">Institutional Requirements</h4>
                  <ListGroup variant="flush" className="academy-eligibility-list">
                    <ListGroup.Item className="academy-eligibility-item border-0 py-2 ps-0 bg-transparent">
                      <i className="bi bi-check-circle academy-primary-color me-2"></i>
                      Accredited educational institution
                    </ListGroup.Item>
                    <ListGroup.Item className="academy-eligibility-item border-0 py-2 ps-0 bg-transparent">
                      <i className="bi bi-check-circle academy-primary-color me-2"></i>
                      Minimum 50 students enrolled
                    </ListGroup.Item>
                    <ListGroup.Item className="academy-eligibility-item border-0 py-2 ps-0 bg-transparent">
                      <i className="bi bi-check-circle academy-primary-color me-2"></i>
                      Dedicated faculty for program delivery
                    </ListGroup.Item>
                    <ListGroup.Item className="academy-eligibility-item border-0 py-2 ps-0 bg-transparent">
                      <i className="bi bi-check-circle academy-primary-color me-2"></i>
                      Compliance with local education regulations
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} className="academy-eligibility-col">
              <Card className="academy-eligibility-card h-100 border rounded-3">
                <Card.Body className="p-4">
                  <h4 className="academy-eligibility-card-title fw-bold mb-4">Program Alignment</h4>
                  <ListGroup variant="flush" className="academy-eligibility-list">
                    <ListGroup.Item className="academy-eligibility-item border-0 py-2 ps-0 bg-transparent">
                      <i className="bi bi-check-circle academy-primary-color me-2"></i>
                      Focus on education, not trading services
                    </ListGroup.Item>
                    <ListGroup.Item className="academy-eligibility-item border-0 py-2 ps-0 bg-transparent">
                      <i className="bi bi-check-circle academy-primary-color me-2"></i>
                      Commitment to ethical teaching practices
                    </ListGroup.Item>
                    <ListGroup.Item className="academy-eligibility-item border-0 py-2 ps-0 bg-transparent">
                      <i className="bi bi-check-circle academy-primary-color me-2"></i>
                      Age restriction enforcement (18+)
                    </ListGroup.Item>
                    <ListGroup.Item className="academy-eligibility-item border-0 py-2 ps-0 bg-transparent">
                      <i className="bi bi-check-circle academy-primary-color me-2"></i>
                      Clear disclaimer and compliance messaging
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Application Process Section */}
      <section className="academy-process-section py-5 academy-bg-light">
        <Container>
          <div className="academy-section-header text-center mb-5">
            <h2 className="academy-section-title fw-bold mb-3">Application Process</h2>
            <p className="academy-section-subtitle text-muted">
              Simple, streamlined partnership application
            </p>
          </div>

          <Row className="g-4 academy-process-steps">
            <Col md={6} lg={3} className="academy-process-step-col">
              <Card className="academy-process-step-card h-100 border-0 shadow-sm rounded-3">
                <Card.Body className="p-4 text-center">
                  <Badge pill bg="primary" className="academy-step-badge mb-3 fs-4 px-3 py-2">1</Badge>
                  <h5 className="academy-step-title fw-bold mb-3">Submit Application</h5>
                  <p className="academy-step-description text-muted mb-0">
                    Complete the partnership inquiry form with institutional details and program requirements.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="academy-process-step-col">
              <Card className="academy-process-step-card h-100 border-0 shadow-sm rounded-3">
                <Card.Body className="p-4 text-center">
                  <Badge pill bg="primary" className="academy-step-badge mb-3 fs-4 px-3 py-2">2</Badge>
                  <h5 className="academy-step-title fw-bold mb-3">Initial Consultation</h5>
                  <p className="academy-step-description text-muted mb-0">
                    Meet with our partnership team to discuss your needs, goals, and curriculum integration.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="academy-process-step-col">
              <Card className="academy-process-step-card h-100 border-0 shadow-sm rounded-3">
                <Card.Body className="p-4 text-center">
                  <Badge pill bg="primary" className="academy-step-badge mb-3 fs-4 px-3 py-2">3</Badge>
                  <h5 className="academy-step-title fw-bold mb-3">Program Customization</h5>
                  <p className="academy-step-description text-muted mb-0">
                    Work together to customize curriculum, materials, and certification programs for your institution.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="academy-process-step-col">
              <Card className="academy-process-step-card h-100 border-0 shadow-sm rounded-3">
                <Card.Body className="p-4 text-center">
                  <Badge pill bg="primary" className="academy-step-badge mb-3 fs-4 px-3 py-2">4</Badge>
                  <h5 className="academy-step-title fw-bold mb-3">Launch & Support</h5>
                  <p className="academy-step-description text-muted mb-0">
                    Faculty training, materials delivery, and ongoing support as you launch the program.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default memo(AcademyPartnershipProgram);