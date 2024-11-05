import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import './WebDev.css'; // Import the CSS file

// Array of developer profiles
const developers = [
  {
    name: 'Jane Doe',
    role: 'Full-Stack Developer | JavaScript, React & Node.js Specialist',
    img: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=J.D',
    github: 'https://github.com/janedoe',
    linkedin: 'https://linkedin.com/in/janedoe',
    twitter: 'https://twitter.com/janedoe',
    skills: [
      { icon: <FaReact size={30} color="#61DBFB" />, name: 'React' },
      { icon: <FaJsSquare size={30} color="#F7DF1E" />, name: 'JavaScript' },
      { icon: <FaHtml5 size={30} color="#E44D26" />, name: 'HTML5' },
      { icon: <FaCss3Alt size={30} color="#1572B6" />, name: 'CSS3' }
    ],
  },
  {
    name: 'John Smith',
    role: 'Frontend Developer | Vue.js, React & Angular Expert',
    img: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=J.S',
    github: 'https://github.com/johnsmith',
    linkedin: 'https://linkedin.com/in/johnsmith',
    twitter: 'https://twitter.com/johnsmith',
    skills: [
      { icon: <FaReact size={30} color="#61DBFB" />, name: 'React' },
      { icon: <FaHtml5 size={30} color="#E44D26" />, name: 'HTML5' },
      { icon: <FaCss3Alt size={30} color="#1572B6" />, name: 'CSS3' }
    ],
  },
  {
    name: 'Alice Brown',
    role: 'UI/UX Designer | React & Tailwind CSS Enthusiast',
    img: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=A.B',
    github: 'https://github.com/alicebrown',
    linkedin: 'https://linkedin.com/in/alicebrown',
    twitter: 'https://twitter.com/alicebrown',
    skills: [
      { icon: <FaHtml5 size={30} color="#E44D26" />, name: 'HTML5' },
      { icon: <FaCss3Alt size={30} color="#1572B6" />, name: 'CSS3' },
      { icon: <FaJsSquare size={30} color="#F7DF1E" />, name: 'JavaScript' }
    ],
  }
];

const WebDev = () => {
  return (
    <div className="profile-container">
      {developers.map((developer, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="profile-card-wrapper"
        >
          <Card className="profile-card">
            <Card.Img
              variant="top"
              src={developer.img}
              alt={developer.name}
              className="profile-image"
            />
            <Card.Body>
              <Card.Title className="profile-name">
                {developer.name}
              </Card.Title>
              <Card.Text className="profile-role">
                {developer.role}
              </Card.Text>

              <hr />
              <div className="profile-skills">
                <h6>Skills</h6>
                <div className="skills-icons">
                  {developer.skills.map((skill, idx) => (
                    <div key={idx} className="skill-icon">
                      {skill.icon}
                    </div>
                  ))}
                </div>
              </div>

              <hr />
              <div className="social-links">
                <a href={developer.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub size={30} color="black" />
                </a>
                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin size={30} color="#0A66C2" />
                </a>
                <a href={developer.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaTwitter size={30} color="#1DA1F2" />
                </a>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="hire-button-wrapper"
              >
                <Button className="hire-button">Hire Me</Button>
              </motion.div>
            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default WebDev;
