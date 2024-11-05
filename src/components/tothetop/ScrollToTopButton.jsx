import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import an icon for the button
import './ScrollTopButton.css'; // Import the CSS file

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
