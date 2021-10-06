// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './navigationItem.scss';

function NavigationItem(
  {
    icon, text, link,
  },
) {
  return (
  // <Link href={`/inner#${link}`} className="navigation__link">
  //   <i><FontAwesomeIcon icon={icon} className="fa-fw" /></i>
  //   <span>{text}</span>
  // </Link>
    <a href={`#${link}`} className="navigation__link">
      <i><FontAwesomeIcon icon={icon} className="fa-fw" /></i>
      <span>{text}</span>
    </a>
  );
}

export default NavigationItem;
