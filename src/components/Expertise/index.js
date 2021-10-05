/* eslint-disable react/no-array-index-key */
import ExpertiseItem from './ExpertiseItem';

function Expertise({ data }) {
  return (
    <div className="expertise__container">
      {data.map((expertise, index) => (
        <ExpertiseItem
          key={index}
          date={expertise.date}
          company={expertise.info.company}
          job={expertise.info.job}
          description={expertise.info.description}
        />
      ))}
    </div>
  );
}

export default Expertise;
