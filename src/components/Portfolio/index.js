/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';

import PortfolioItem from './PortfolioItem';
import { portfolioData } from '../../utils/data';

import './index.scss';

function Portfolio() {
  const [keyStateIsActive, setKeyIsActive] = useState('*');
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
        <li onClick={(event) => handleFilterKeyChange(event, 'html_css_js')} className={keyStateIsActive === 'html_css_js' ? 'active' : 'not-active'}>HTML & CSS /</li>
        <li onClick={(event) => handleFilterKeyChange(event, 'reactjs')} className={keyStateIsActive === 'reactjs' ? 'active' : 'not-active'}>ReactJS</li>
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
