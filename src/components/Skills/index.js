import RangeAxis from './RangeAxis';

import './index.scss';

function Skills({ data }) {
  return (
    <div className="skills__wrapper">
      <ul className="skills__chart">
        {data.map((skill, index) => (
          <li key={index} className="skills__chart-item" style={{ width: `${skill.range}%` }}>
            <span className="skills__chart-name">{skill.name}</span>
          </li>
        ))}
      </ul>
      <RangeAxis />
    </div>
  );
}

export default Skills;
