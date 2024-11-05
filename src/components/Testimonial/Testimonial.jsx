import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container className='align-items-center mt-5'>
        <h1 className='mb-4 text-center'>TESTIMONIAL</h1>
      <Row className="justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card>
                <Card.Body>
                  <Card.Text className='cotoya'>{testimonial.quote}</Card.Text>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Subtitle>{testimonial.title}</Card.Subtitle>
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
