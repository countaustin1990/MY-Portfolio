import { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal, Alert, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Consultant.css';

const Consultant = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  
  const [isBooked, setIsBooked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, date, time } = formData;

    // Basic validation
    if (!name || !email || !date || !time) {
      setErrorMessage('All fields are required.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    // Simulating a booking request
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
      setIsBooked(true);
    }, 2000);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', date: '', time: '' });
  };

  const handleHomeRedirect = () => {
    navigate('/'); // Redirect to the homepage
  };

  return (
    <Container className="booking-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center">Book an Appointment</h2>
            <p className="text-center description">
              Schedule a consultation with our expert consultants. Choose your preferred time slot and we will confirm the booking.
            </p>
          </motion.div>

          {!isBooked ? (
            <Form onSubmit={handleSubmit} className="booking-form">
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  as="select"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Select a time slot</option>
                  {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="primary" type="submit" disabled={loading} className="mt-3">
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" /> Booking...
                    </>
                  ) : (
                    'Book Appointment'
                  )}
                </Button>
              </motion.div>
            </Form>
          ) : (
            <Alert variant="success" className="mt-3">
              Your appointment has been booked!
              <Button variant="link" onClick={handleHomeRedirect} className="d-block mt-2">
                Go to Homepage
              </Button>
            </Alert>
          )}

          {/* Modal for successful booking */}
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Appointment Confirmed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Thank you for booking an appointment with us!</p>
              <p>
                We have scheduled your consultation on{' '}
                <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
              </p>
              <p>You will receive an email confirmation shortly.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleModalClose}>
                Close
              </Button>
              <Button variant="secondary" onClick={handleHomeRedirect}>
                Go to Homepage
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Consultant;
