import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './index.scss';

function Address() {
  return (
    <address className="address__container">
      <a href="tel:+9292382891" className="address__contact">
        <FontAwesomeIcon icon={faPhoneAlt} className="address__icon fa-lg fa-fw" />
        929 238 2891
      </a>
      <a href="mailto:nmilovanova@gmail.com" className="address__contact">
        <FontAwesomeIcon icon={faEnvelope} className="address__icon fa-lg fa-fw" />
        {' '}
        natalie.milovanova@gmail.com
      </a>
      <a href="https://linkedin.com/in/natalia-milovanova-79b715122" className="address__contact">
        <FontAwesomeIcon icon={faLinkedinIn} className="address__icon fa-lg fa-fw" />
        <div className="address__contact-details">
          <span>LinkedIn</span>
          <span className="address__link">linkedin.com/natalia-milovanova</span>
        </div>
      </a>
    </address>
  );
}

export default Address;
