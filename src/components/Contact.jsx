import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact__part">
        <div className="container">
          <div className="logo__part">
            <img src="/src/assets/footer-logo.png" alt="footer-logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              fringilla lobortis nibh risus venenatis arcu. Facilisis leo mi
              facilisi a, turpis massa rhoncus aliquam. Vestibulum eros, egestas
              est at nisl blandit magna leo.
            </p>
            <a href="#">follows us:</a>
          </div>
          <div className="links__part">
            <h3>Important Links</h3>
            <ul className="footer__link">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Units & Concerns</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">CSR</a>
              </li>
              <li>
                <a href="#">Term & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="location__part">
            <p>
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              CID Headquarters, Street Name State 1234, Country Name
            </p>
            <h3>Stay connected</h3>
            <form action="#">
              <input
                type="text"
                placeholder="youremail@email.com
              Subscribe"
              />
              <button>subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
