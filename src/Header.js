import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Header() {
    return (
        <Router>
            <div>
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
                <Routes>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Routes>
            </div>
        </Router>
    );
  }
  
  export default Header;
  