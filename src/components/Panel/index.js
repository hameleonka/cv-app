/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PhotoBox from '../PhotoBox';
import Navigation from '../Navigation';
import RouterButton from '../../RouterButton';

import menuIcon from '../../assets/images/menu_icon.svg';

import './index.scss';

function Panel() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const toggleMenuTransform = {
    marginLeft: menuIsOpen ? '0' : 'calc(-1 * var(--aside-width))',
  };

  return (
    <div className="panel__container" style={toggleMenuTransform}>
      <PhotoBox
        name="John Doe"
        title=""
        description=""
        avatar="http://avatars0.githubusercontent.com/u/246180?v=4"
        styles="panel"
      />
      <Navigation />
      <RouterButton
        classes="panel__btn"
        icon={faChevronLeft}
        text="Go back"
        page="home"
      />
      <img
        className="panel__menu-icon"
        src={menuIcon}
        alt="menu icon"
        onClick={() => setMenuIsOpen((oldState) => !oldState)}
      />
    </div>
  );
}

export default Panel;
