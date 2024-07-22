import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            MindConnect is dedicated to providing personalized mental health
            support to help you thrive. Connect with licensed therapists, join
            supportive communities, and access valuable resources.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-sm hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                className="text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                className="text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                className="text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@mindful.com" className="hover:underline">
              info@mindful.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+254713982805" className="hover:underline">
              +254 13982805
            </a>
          </p>
          <p className="text-sm">
            Address: 123 Mindful Lane, Wellness City, ST 12345
          </p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Mindful. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
