import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ps-4 pe-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Simple Header</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-nav ms-auto">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tengah">FAQs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>   
          </div>
        </div>
      </nav>

      <div id="header" className="gambar1">
        <div className="konten">
          <h1>Better Solutions For Your <br /> Business</h1>
          <p>We are a team of talented designers making websites with <br /> Bootstrap</p>
          <div id="button-container">
            <button id="btn-start">Get Started</button>
            
            <Link to="/create-product">
              <button id="btn-start-product">Create Product</button> {/* Tambahkan tombol Link yang mengarah ke Create Product */}
            </Link>
            <p id="watch-text">Watch Video</p>
          </div>
        </div>
        <div className="logo">
          <img src="/image/hero.png" alt="Hero Image" className="hero" />
        </div>
      </div>    

      <div id="tengah" className="tengah">
        <div className="konten2">
          <h3>Join Our Newsletter</h3>
          <p>Tamen Quem nulla quae multos aute sint culpa legam noster magna</p>
        </div>
        <div className="frm">
          <input type="text" id="inpt" placeholder="" />
          <button className="btn-scrb">Subscribe</button>
        </div>
      </div>

      <div className="ftr">
        <div className="footer-column">
          <h3>ARSHA</h3>
          <p>
            A108 Adam Street<br />
            <span style={{ paddingLeft: '5px' }}>New York, NY 535022</span>
            <br /><span style={{ paddingLeft: '5px' }}>United States</span>
          </p>
          <div className="contact-info">
            <p><strong>Phone:</strong> +1 5589 55488 55</p>
            <p><strong>Email:</strong> info@example.com</p>
          </div>
        </div>
      
        <div className="footer-column">
          <h6>Useful Links</h6>
          <ul className="ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
      
        <div className="footer-column">
          <h6>Our Services</h6>
          <ul className="our1">
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h6>Our Social Networks</h6>
          <p>Cras fermentum odio eu feugiat lide par <br /> naso tierra videa magna derita valies</p>
          <img src="image/bulat.png" alt="Social Media Icon" />
        </div>        
      </div>

      <div className="bawah">
        <p>© Copyright <strong>Arsha.</strong> All Rights Reserved</p>
        <p>Designed by <span className="selection">BootstrapMade</span></p>
      </div>
    </div>
  );
};

export default LandingPage;
