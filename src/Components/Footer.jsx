import './../App.css';
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <footer className="footer">

        <div className="footer-divs">
            &copy; Copyright 2022
        </div>

        <div className="footer-divs">
        <Link to="/About">About Us</Link> 
        </div>

      </footer>
    </div>
  )
}

export default Footer
