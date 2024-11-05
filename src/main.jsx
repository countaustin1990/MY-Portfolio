import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import your App component

// Create the root element
const container = document.getElementById('root');
const root = createRoot(container); // Use createRoot instead of ReactDOM.render

// Render the app inside the root element
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
