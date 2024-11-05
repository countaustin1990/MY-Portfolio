import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CosNavbar.css';
import useSearch from '../../hook/useSearch'; // Custom hook for search logic
import Logo from '../../assets/Logo.png';

const CosNavbar = () => {
  const { searchTerm, setSearchTerm, handleSearch } = useSearch();

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm container-fluid">
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-weight-bold coldi text-primary">
          <img src={Logo} className='' width={100}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Home Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Nav.Link as={Link} to="/" className="font-weight-bold">
                Home
              </Nav.Link>
            </motion.div>

            {/* Services Dropdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <NavDropdown
                title={<span><i className="bi bi-briefcase mr-2"></i> Services</span>}
                id="basic-nav-dropdown"
                className="font-weight-bold"
                align="end"
              >
                <NavDropdown.Item as={Link} to="/webdev" className="d-flex align-items-center">
                  <i className="bi bi-laptop mr-2"></i> Web Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mobdev" className="d-flex align-items-center">
                  <i className="bi bi-phone mr-2"></i> App Development
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/consultant" className="d-flex align-items-center">
                  <i className="bi bi-gear mr-2"></i> Consulting
                </NavDropdown.Item>
              </NavDropdown>
            </motion.div>

            {/* About and Contact Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Nav.Link as={Link} to="/about" className="font-weight-bold">
                About
              </Nav.Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Nav.Link as={Link} to="/contactus" className="font-weight-bold">
                Contact
              </Nav.Link>
            </motion.div>
          </Nav>

          {/* Search Form */}
          <Form className="d-inline my-2 my-lg-0 ml-lg-3 d-flex" onSubmit={handleSearch}>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                variant="outline-primary"
                className="d-flex align-items-center"
                style={{ borderRadius: '25px' }}
                type="submit"
              >
                <i className="bi bi-search mr-2"></i> Search
              </Button>
            </motion.div>
          </Form>

          {/* User Profile Dropdown 
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
                align="end"
              >
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </motion.div>
          </Nav>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CosNavbar;
