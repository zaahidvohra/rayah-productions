import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-heading text-primary">Rayah Productions</h1>
        <div className="space-x-4 text-sm font-body">
          <Link to="/" className="text-text-heading hover:text-primary">Home</Link>
          <Link to="/about" className="text-text-heading hover:text-primary">About</Link>
          <Link to="/services" className="text-text-heading hover:text-primary">Services</Link>
          <Link to="/portfolio" className="text-text-heading hover:text-primary">Portfolio</Link>
          <Link to="/contact" className="text-text-heading hover:text-primary">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
