

const ContactUs = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Contact Information */}
        <div className="col-md-6 mb-4">
          <h2>Contact Us</h2>
          <p className="mb-4">
            We are here to assist you. Please reach out with any questions, feedback, or inquiries.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              1234, Main Street, City, Country
            </li>
            <li className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              contact@company.com
            </li>
            <li className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +123 456 7890
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className="mt-4">
            <a href="https://facebook.com" className="me-3">
              <i className="bi bi-facebook fs-3"></i>
            </a>
            <a href="https://twitter.com" className="me-3">
              <i className="bi bi-twitter fs-3"></i>
            </a>
            <a href="https://instagram.com" className="me-3">
              <i className="bi bi-instagram fs-3"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h3>Send Us a Message</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your full name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h3>Find Us on the Map</h3>
          <div className="map-responsive">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096885!2d144.9537363155047!3d-37.81627974202157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b1b8f59352a1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1641830019289!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
