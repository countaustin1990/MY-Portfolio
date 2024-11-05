import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CosNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm container">
      <Navbar.Brand href="#" className="font-weight-bold">MyBrand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Nav.Link href="#" className="font-weight-bold">Home</Nav.Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NavDropdown 
              title={
                <span>
                  <i className="bi bi-briefcase mr-2"></i> Services
                </span>
              }
              id="basic-nav-dropdown" 
              className="font-weight-bold"
              menuAlign="right"
            >
              <NavDropdown.Item href="#" className="d-flex align-items-center">
                <i className="bi bi-laptop mr-2"></i> Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="d-flex align-items-center">
                <i className="bi bi-phone mr-2"></i> App Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="d-flex align-items-center">
                <i className="bi bi-gear mr-2"></i> Consulting
              </NavDropdown.Item>
            </NavDropdown>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Nav.Link href="#" className="font-weight-bold">About</Nav.Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Nav.Link href="#" className="font-weight-bold">Contact</Nav.Link>
          </motion.div>
        </Nav>

        <Form inline className="my-2 my-lg-0 ml-lg-3 d-flex">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ borderColor: '#ced4da', borderRadius: '25px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="outline-success"
              className="d-flex align-items-center"
              style={{ borderRadius: '25px' }}
            >
              <i className="bi bi-search mr-2"></i> Search
            </Button>
          </motion.div>
        </Form>

        <Nav className="ml-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <NavDropdown
              title={<i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>}
              id="basic-nav-dropdown"
              className="font-weight-bold"
            >
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </motion.div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CosNavbar;
