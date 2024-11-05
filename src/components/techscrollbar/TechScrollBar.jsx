
import { FaReact, FaNodeJs, FaBootstrap, FaPython, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiVite, SiWebpack, SiNextdotjs, SiCplusplus } from 'react-icons/si';
import './TechScrollBar.css'; // External CSS file

const techStacks = [
  { name: 'React', icon: <FaReact /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Webpack', icon: <SiWebpack /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Java', icon: <FaJava /> }
];

const TechScrollBar = () => {
  return (
    <div className="container bg-dark text-white p-5">
      <div className="tech-scroll-wrapper">
        <div className="tech-scroll-content">
          {techStacks.map((stack, index) => (
            <div key={index} className="tech-item display-5">
              <span className="tech-icon">{stack.icon}</span>
              {stack.name}
            </div>
          ))}
          {/* Duplicate the stack to ensure seamless scrolling */}
          {techStacks.map((stack, index) => (
            <div key={index + techStacks.length} className="tech-item">
              <span className="tech-icon display-3">{stack.icon}</span>
              {stack.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechScrollBar;
