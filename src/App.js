import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';

// CHANGE THIS LINE: Switched 'BrowserRouter' to 'HashRouter'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Router> is now HashRouter, so it works automatically
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;