import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
    
      <div className="footer-features">
        <div className="feature-item"><img src="/src/assets/approved-feature.svg" alt="Time Out" />
        <div>PTA Approved </div>
        <h5>Mobile Phones</h5>
        </div>
        <div className="feature-item"><img src="/src/assets/warranty-feature.svg" alt="Time Out" />
        <div>1 Year</div>
        <h5>Brand Warranty</h5>
        </div>
        <div className="feature-item"><img src="/src/assets/video-shooting-camera.svg" alt="Time Out" />
        <div>Packaging Video</div> 
        <h5>See Your Product</h5>
        </div>
        <div className="feature-item"><img src="/src/assets/shipping-feature.svg" alt="Time Out" />
        <div>Fast Delivery </div>
        <h5> All Over Pakistan</h5>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h3>OZ-Tech.pk</h3>
          <a href="/">About Us</a>
          <a href="/">FAQs</a>
          <a href="/">Contact Us</a>
          <a href="/">Careers</a>
          <a href="/">Press & Blog</a>
          <a href="/">Terms & Conditions</a>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <a href="/">Help Center</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Installments Plan</a>
          <a href="/">E-Warranty Activation</a>
          <a href="/">Sell on Priceoye</a>
        </div>

        <div className="footer-column">
          <h3>Secure Payment Methods</h3>
          <div className="payment-icons">
            <img src="/src/assets/payment_method.svg"/>
            <a href="https://play.google.com/store/games?device=windows"><img src="/src/assets/google-store-badge.webp" alt="" /></a>
          </div>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>©Copyright 2026 <br /> OZ-Tech.pk</p>
        <div className="social-icons">
          <a href="http://Youtube.com"><img src='/src/assets/social-youtube.svg' alt="Time Out"/></a>
          <a href="http://facebook.com"><img src="/src/assets/social-fb.svg"/></a>
          <a href="http://instragram.com"><img src="/src/assets/social-instagram.svg"/></a>
          <a href="http://tiktok.com"><img src="/src/assets/tiktok.svg"/></a>
          <a href="http://linkedin.com"><img src="/src/assets/linkedin.svg"/></a>
        </div>
      </div>
    </footer>
  );
}
