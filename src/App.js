import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
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
