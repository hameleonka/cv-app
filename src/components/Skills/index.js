import { useSelector, useDispatch } from 'react-redux';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import AddSkillForm from './addSkillForm';
import Button from '../Button';
import { toggleAddSkillForm } from '../../features/skills/skillsSlice';
import RangeAxis from './RangeAxis';

import './index.scss';

function Skills({ data }) {
  const addSkillFormState = useSelector((state) => state.skills.addSkillFormState);
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(toggleAddSkillForm());

  return (
    <div className="skills__wrapper">
      { addSkillFormState && (
        <AddSkillForm />
      )}
      <Button
        icon={faPen}
        text={addSkillFormState ? 'Close edit' : 'Open edit'}
        classes="skills__btn"
        onClickHandler={onClickHandler}
      />
      <ul className="skills__chart">
        {data.map((skill) => (
          <li className="skills__chart-item" style={{ width: `${skill.range}%` }}>
            <span className="skills__chart-name">{skill.name}</span>
          </li>
        ))}
      </ul>
      <RangeAxis />
    </div>
  );
}

export default Skills;
