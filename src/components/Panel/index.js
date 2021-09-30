import React, { useState } from 'react';

import PhotoBox from "../PhotoBox/index";
import Navigation from "../Navigation/index";
import Button from "../Button/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import menuIcon from '../../assets/images/menu_icon.svg';

import './index.scss';

function Panel() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const toggleMenuTransform = menuIsOpen ? 'translateX(0)' : 'translateX(-100%)';

  return (
    <div className="panel__container" style={{ transform: toggleMenuTransform }}>
      <PhotoBox
        name="John Doe"
        title=""
        description=""
        avatar="http://avatars0.githubusercontent.com/u/246180?v=4"
        styles="panel"
      />
      <Navigation />
      <Button
        classes="panel__btn"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
        text="Go back"
        page="home" />
      <img
        className="panel__menu-icon"
        src={menuIcon}
        alt="menu icon"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />
    </div>
  )
}

export default Panel;