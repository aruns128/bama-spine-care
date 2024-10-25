import React from "react";

const locations = [
  {
    city: "Mulanthuruthy",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.857304348363!2d76.36051737583555!3d9.891592992900409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08087a93174ad5%3A0x5b6eaf0ad3849cf2!2sMulanthuruthy!5e0!3m2!1sen!2sin!4v1698257101234!5m2!1sen!2sin",
  },
  {
    city: "Njarakkal",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.834619470712!2d76.25770477583442!3d9.80506039296164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0876c1ce10f327%3A0x833bc65b4a11f5f!2sNjarakkal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1698257256706!5m2!1sen!2sin",
  },
  {
    city: "Tirunelveli",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.145983357768!2d77.68922627584742!3d8.713912393728558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04912972a5a98f%3A0x38f5437f03f449d9!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1698257298567!5m2!1sen!2sin",
  },
  {
    city: "Chennai",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.764662296242!2d80.22651957591416!3d12.990297465028846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52692b1bc95dfd%3A0xe8d89efda0f0c0aa!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1698257345687!5m2!1sen!2sin",
  },
  {
    city: "Bangalore",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.756313099557!2d77.59456227595793!3d12.97159899085506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670cc1ad34f%3A0x89e23bbadf9d546b!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698257393701!5m2!1sen!2sin",
  },
];

function ContactSection() {
  return (
    <section id="contact" className="section min-height">
      <div className="container">
        <h2 className="text-center">Locations</h2>
        <div className="row">
          {/* Left side: Locations with city names */}
          <div className="col-md-12 mb-4">
            <div className="row">
              {locations.map((location, index) => (
                <div className="col-md-6 mb-3" key={index}>
                  <div className="card">
                    <iframe
                      src={location.mapSrc}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                    <div className="card-body text-center">
                      <h5 className="card-title">{location.city}</h5>
                      <p className="card-text">
                        <strong>Phone:</strong> +91 99463 53204 <br />
                        <strong>Email:</strong> drbamaspine69@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Contact form */}
          {/* <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
