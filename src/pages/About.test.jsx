import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './AboutPage.css';

const AboutPage = () => {
  return (
    <Container className="mt-5 mb-5">
      <motion.h1
        className="mb-4 text-center fw-6 fwwt"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Austech IO
      </motion.h1>

      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            At Austech IO, we are passionate about leveraging technology to drive innovation and enhance business operations. Our mission is to provide cutting-edge solutions that empower organizations to thrive in a digital-first world.
          </motion.p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col md={12}>
          <motion.h2
            className="mb-4 text-center fw-6 fwwt"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h2>
          <Row>
            {[
              {
                title: 'Innovation',
                description: 'We strive to continuously innovate and bring new, creative solutions to the table.',
                icon: '🚀',
              },
              {
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We aim to exceed their expectations.',
                icon: '🤝',
              },
              {
                title: 'Integrity',
                description: 'We uphold the highest standards of integrity in all our interactions and decisions.',
                icon: '🔍',
              },
              {
                title: 'Excellence',
                description: 'We are committed to delivering high-quality solutions and services to our clients.',
                icon: '🏆',
              },
            ].map((value, index) => (
              <Col md={3} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Card className="text-center">
                    <Card.Body>
                      <h3 className="mb-3">{value.icon} {value.title}</h3>
                      <Card.Text>{value.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={12}>
          <motion.h2
            className="mb-4 text-center fw-6 fwwt"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.h2>
          <Row>
            {[
              {
                name: 'John Doe',
                position: 'CEO',
                bio: 'John leads our team with a vision to drive technological innovation and business growth.',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Jane Smith',
                position: 'CTO',
                bio: 'Jane oversees our technological strategy and ensures we stay at the forefront of innovation.',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Michael Brown',
                position: 'COO',
                bio: 'Michael manages our operations, ensuring that our projects are delivered efficiently and effectively.',
                image: 'https://via.placeholder.com/150',
              },
            ].map((member, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Card className="text-center">
                    <Card.Img variant="top" src={member.image} />
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                      <Card.Text>{member.bio}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
