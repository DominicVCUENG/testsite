import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/home"> {/* Use the Link component with "to" prop */}
              <button>Home</button> {/* Button for the Home page */}
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>About</button> {/* Button for the About page */}
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button>Contact</button> {/* Button for the Contact page */}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Header;
  