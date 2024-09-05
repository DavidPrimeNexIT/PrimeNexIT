import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Image
            src="/images/footer-logo.png"
            alt="Logo de PrimeNex IT"
            width={1000}
            height={1000}
          />
        </div>
        <div className="footer-info">
          <p>CARTAGO, COSTA RICA</p>
        </div>
        <div className="footer-contact">
          <p>
            <strong>CONTACT US</strong>
          </p>
          <p>+(506) 6469-5005</p>
          <p>
            <a href="mailto:contacto@primenexit.com">contact@primenexit.net</a>
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/primenex-it"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <p>&copy; 2024 PrimeNex IT. All rights reserved.</p>
    </footer>
  );
}
