import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow, faComment} from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <nav className="navigation__container">
      <ul>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <i><FontAwesomeIcon icon={faUser} className="fa-fw"/></i>
            <span>About me</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <i><FontAwesomeIcon icon={faGraduationCap} className="fa-fw"/></i>
            <span>Education</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <i><FontAwesomeIcon icon={faPen} className="fa-fw"/></i>
            <span>Experience</span>
          </a>
        </li >
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <i><FontAwesomeIcon icon={faGem} className="fa-fw"/></i>
            <span>Skills</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <i><FontAwesomeIcon icon={faSuitcase} className="fa-fw"/></i>
            <span>Portfolio</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <i><FontAwesomeIcon icon={faLocationArrow} className="fa-fw fa-xs"/></i>
            <span>Contacts</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <i><FontAwesomeIcon icon={faComment} className="fa-fw"/></i>
            <span>Feedbacks</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;