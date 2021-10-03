import './index.scss';

function Skills({ data }) {
  return (
    <div>
      {data.map((skill) => (
        <p>
          {skill.name}
          {' '}
          {skill.range}
        </p>
      ))}
    </div>
  );
}

export default Skills;
