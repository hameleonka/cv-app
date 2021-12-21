import { skillsData } from '../../utils/data';

import './index.scss';

function Skills() {
  return (
    <ul className="skills__wrapper">
      {skillsData.map((skill, index) => (
        <li key={index} className="skills__icon__wrapper">
          <img
            src={skill.iconUrl}
            className="skills__icon"
            alt={`${skill.name} icon`}
          />
          <span className="skills__text">{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
