import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon for a checkmark

function ServicesSection() {
  const servicesGroup1 = [
    "Back Pain",
    "Neck Pain",
    "Cervical Rib",
    "Frozen Shoulder",
    "Scoliosis",
    "Stenosis",
    "Spondylosis",
    "Pelvis Tilting",
    "Sciatica",
    "Migraine",
    "Vertigo",
    "Fibromyalgia",
  ];

  const servicesGroup2 = [
    "Varicose Vein",
    "Anxiety",
    "Numbness",
    "Arthritis",
    "Joint Pain",
    "Paralysis",
    "Knee Pain (Knee Replacement Stage)",
    "Avascular Necrosis (AVN, Hip Replacement Stage)",
    "Listhesis (Even Grade 3)",
    "Pelvic Inflammatory Disease (PID)",
    "Disc Problems (Bulge, Herniated, Prolapse, Extrusion)",
    "Uric Acid-Pain",
  ];

  const servicesGroup3 = [
    "Insomnia (Sleeplessness)",
    "Hemangioma",
    "Post Accidental Pain",
    "Carpal Tunnel Syndrome",
    "Pain After Surgery",
    "Severe Menstrual Pain",
    "Walking Abnormalities",
    "Ligament Fracture",
    "Ankylosing Spondylitis",
    "Muscular Dystrophy",
    "Parkinson's Disease",
    "Syringomyelia",
  ];

  return (
    <section id="services" className="pb-5 pt-10 bg-light-green">
      <div className="container">
        <h2 className="text-center mb-4">Conditions We Treat</h2>

        <div className="row">
          {/* Left Column for Common Conditions */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h3 className="mb-3">Common Conditions</h3>
            <ul className="list-unstyled">
              {servicesGroup1.map((service, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column for Additional Conditions */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h3 className="mb-3">Additional Conditions</h3>
            <ul className="list-unstyled">
              {servicesGroup2.map((service, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column for Specialized Treatments */}
          <div className="col-md-4 col-sm-12">
            <h3 className="mb-3">Specialized Treatments</h3>
            <ul className="list-unstyled">
              {servicesGroup3.map((service, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* YouTube Section */}
        <div className="text-center mt-5">
          <div className="responsive-video">
            <iframe
              src="https://www.youtube.com/embed/QV0JqnKRxIc?si=iS4zj9YWm-9W9pmC"
              title="YouTube video player"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
