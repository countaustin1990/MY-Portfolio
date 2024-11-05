import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import TechScrollBar from '../components/techscrollbar/TechScrollBar';
import Testimonial from '../components/Testimonial/Testimonial.rest.test';
import { Link } from 'react-router-dom';
import Wallpaper from '../assets/wallpaper.png'


const HeroSection = () => {
  return (
    <>
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* Text Column */}
            <Col md={6} className="text-center text-md-left">
              <motion.h1
                className="display-4 font-weight-bold mb-4 croor"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                WEBSITE AND APPLICATION DEVELOPMENT
              </motion.h1>
              <motion.p
                className="lead mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We provide exceptional solutions to help you achieve your business goals. Our team is dedicated to delivering top-notch results tailored to your needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/about" className="hover:underline">
                <Button variant="primary" size="lg" className='mb-5'>
                  
                  
                  Learn More
                 
                </Button>
               </Link>
                
              </motion.div>
            </Col>
            
            {/* Image Column */}
            <Col md={6} className="text-center">
              <motion.img
                src={Wallpaper}
                alt="Hero Image"
                className="img-fluid rounded shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <TechScrollBar/>
      <Testimonial/>
    </>
  );
};

export default HeroSection;
