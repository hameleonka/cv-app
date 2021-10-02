import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './navigationItem.scss';

function NavigationItem({ icon, text, link }) {
  return (
    <a href={`#${link}`} className="navigation__link">
      <i><FontAwesomeIcon icon={icon} className="fa-fw" /></i>
      <span>{text}</span>
    </a>
  );
}

export default NavigationItem;
