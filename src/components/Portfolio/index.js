/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';

import PortfolioItem from './PortfolioItem';
import { portfolioData } from '../../data';

import './index.scss';

function Portfolio() {
  const [keyStateIsActive, setKeyIsActive] = useState({
    all: false,
    htmlcss: false,
    js: false,
  });
  const isotope = useRef();

  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    });

    return () => isotope.current.destroy();
  }, []);

  const handleFilterKeyChange = (event, key) => {
    isotope.current.arrange({ filter: `${key !== '*' ? '.' : ''}${key}` });
    setKeyIsActive(key);
  };

  return (
    <>
      <ul className="portfolioList__keys">
        <li onClick={(event) => handleFilterKeyChange(event, '*')} className={keyStateIsActive === '*' ? 'active' : 'not-active'}>All /</li>
        <li onClick={(event) => handleFilterKeyChange(event, 'html_css')} className={keyStateIsActive === 'html_css' ? 'active' : 'not-active'}>HTML&CSS /</li>
        <li onClick={(event) => handleFilterKeyChange(event, 'js')} className={keyStateIsActive === 'js' ? 'active' : 'not-active'}>JavaScript</li>
      </ul>
      <div className="filter-container">
        {portfolioData.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            text={project.text}
            url={project.url}
            image={project.image}
            filter={project.filter}
          />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
