import React from "react";
import "../css/global.css";
import "../css/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Smartphone Technology</h2>
          <p>
            Explora los últimos avances en tecnología de smartphones. Encuentra
            los mejores dispositivos al mejor precio.
          </p>
        </div>

        <div className="footer-section social">
          <h2>Redes Sociales</h2>
          <ul className="social-links">
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Smartphone Technology | Todos los
        derechos reservados
      </div>
    </footer>
  );
};
