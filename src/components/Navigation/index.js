import {
  faUser, faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import NavigationItem from './NavigationItem';

import './index.scss';

function Navigation() {
  const navigationItems = [
    { icon: faUser, text: 'About me', link: 'about_me' },
    { icon: faGraduationCap, text: 'Education', link: 'education' },
    { icon: faPen, text: 'Experience', link: 'experience' },
    { icon: faGem, text: 'Skills', link: 'skills' },
    { icon: faSuitcase, text: 'Portfolio', link: 'portfolio' },
    { icon: faLocationArrow, text: 'Contacts', link: 'contacts' },
  ];

  return (
    <nav className="navigation__container">
      <ul>
        {navigationItems.map((navigationItem, index) => (
          <li key={index} className="navigation__item">
            <NavigationItem
              icon={navigationItem.icon}
              text={navigationItem.text}
              link={navigationItem.link}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
