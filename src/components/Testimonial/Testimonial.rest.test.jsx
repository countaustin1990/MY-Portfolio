import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial.css';
import '../../pages/About.css'

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Tech Innovators",
    quote: "Austech.io transformed businesses operations with their cutting-edge solutions."
  },
  {
    name: "Jane Smith",
    title: "CTO, Future Enterprises",
    quote: "Their services boosted our efficiency and streamlined our processes remarkably."
  },
  {
    name: "Michael Brown",
    title: "Founder, StartUpX",
    quote: "Partnering with Austech.io was a game-changer for our startup’s growth."
  }
];

const TestimonialsSection = () => {
  return (
    <Container className="align-items-center mt-5 mb-5">
      <motion.h3
        className="mb-4 text-center fw-6 fwwt"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        TESTIMONIAL
      </motion.h3>
      <Row className="justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <Card>
                <Card.Body>
                  {/* Animate the quote text */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Card.Text>{testimonial.quote}</Card.Text>
                  </motion.div>

                  {/* Animate the title */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Card.Title className='cotoy'>{testimonial.name}</Card.Title>
                    <Card.Subtitle>{testimonial.title}</Card.Subtitle>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialsSection;
