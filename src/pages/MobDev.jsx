import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaAndroid, FaApple, FaReact } from 'react-icons/fa';
import './MobDev.css';

const services = [
  {
    title: 'Android App Development',
    description:
      'Developing powerful, custom Android applications for businesses of all sizes.',
    icon: <FaAndroid size={40} color="#3DDC84" />,
    img: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Android+Dev'
  },
  {
    title: 'iOS App Development',
    description:
      'Creating innovative and intuitive iOS applications for the Apple ecosystem.',
    icon: <FaApple size={40} color="#A2AAAD" />,
    img: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=iOS+Dev'
  },
  {
    title: 'Cross-Platform Apps',
    description:
      'Building apps that run seamlessly on both Android and iOS using React Native.',
    icon: <FaReact size={40} color="#61DBFB" />,
    img: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Cross+Platform'
  }
];

const MobileDevelopmentPage = () => {
  return (
    <div className="mobile-development-page">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="title text-center">Mobile App Development</h1>
          <p className="description text-center">
            At Austech, we craft cutting-edge mobile apps that work smoothly across all platforms, ensuring user-friendly experiences.
          </p>
        </motion.div>

        <Row className="services-row">
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="service-card-wrapper"
              >
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src={service.img}
                    alt={service.title}
                    className="service-image"
                  />
                  <Card.Body>
                    <div className="icon-container">
                      {service.icon}
                    </div>
                    <Card.Title className="service-title">{service.title}</Card.Title>
                    <Card.Text className="service-description">
                      {service.description}
                    </Card.Text>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="learn-more-button-wrapper"
                    >
                      <Button className="learn-more-button">Learn More</Button>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MobileDevelopmentPage;
