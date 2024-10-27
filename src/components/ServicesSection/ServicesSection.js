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
    "Varicose Vein",
    "Anxiety",
    "Numbness",
    "Arthritis",
    "Joint Pain",
    "Paralysis",
  ];

  const servicesGroup2 = [
    "Knee Pain (Knee Replacement Stage)",
    "Avascular Necrosis (AVN, Hip Replacement Stage)",
    "Listhesis (Even Grade 3)",
    "Pelvic Inflammatory Disease (PID)",
    "Disc Problems (Bulge, Herniated, Prolapse, Extrusion)",
    "Uric Acid-Pain",
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
          <div className="col-lg-6 mb-4">
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

          {/* Right Column for Specialized Treatments */}
          <div className="col-lg-6">
            <h3 className="mb-3">Specialized Treatments</h3>
            <ul className="list-unstyled">
              {servicesGroup2.map((service, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
