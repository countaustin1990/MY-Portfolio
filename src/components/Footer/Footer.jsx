import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Mock API call to simulate subscription
  const subscribe = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@fail.com') {
          reject('Failed to subscribe.');
        } else {
          resolve('Subscribed successfully!');
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Subscribing...');
    try {
      const response = await subscribe(email);
      setStatusMessage(response);
      setEmail(''); // Clear the email field after success
    } catch (error) {
      setStatusMessage(error);
    }
  };

  return (
    <footer className="bg-light text-dark">
      <Container className="py-5">
        <Row className="mb-4">
          <Col md={4}>
            <a href="https://austech.io" className="d-flex align-items-center mb-3">
              <img
                src="https://austech.io/logo.svg"
                className="mr-2"
                alt="Austech Logo"
                style={{ height: '40px' }}
              />
              <span className="h3 font-weight-bold">Austech IO</span>
            </a>
            <p>
              Innovation meets technology at Austech IO. Providing cutting-edge solutions for a digital future.
            </p>
          </Col>

          {/* Subscription form */}
          <Col md={4}>
            <h5 className="font-weight-bold mb-3">Subscribe</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
              >
                Subscribe
              </Button>
              {statusMessage && (
                <p className="mt-3">{statusMessage}</p>
              )}
            </Form>
          </Col>

          {/* Resources Section */}
          <Col md={4}>
            <h5 className="font-weight-bold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="https://flowbite.com/" className="text-dark">Flowbite</a></li>
              <li><a href="https://tailwindcss.com/" className="text-dark">Tailwind CSS</a></li>
              <li><a href="https://reactjs.org/" className="text-dark">React</a></li>
              <li><a href="https://vitejs.dev/" className="text-dark">Vite</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h5 className="font-weight-bold mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:info@austech.io" className="text-dark">Email: info@austech.io</a></li>
              <li><a href="tel:+123456789" className="text-dark">Phone: +1 (234) 567-89</a></li>
              <li>Office: 123 Innovation Street, Tech City</li>
            </ul>
          </Col>
        </Row>

        <Row>
          {/* Legal Section */}
          <Col md={4}>
            <h5 className="font-weight-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Privacy Policy</a></li>
              <li><a href="#" className="text-dark">Terms & Conditions</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <span className="text-muted">© 2024 Austech IO. All Rights Reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
