/* eslint-disable react/no-array-index-key */
import ExpertiseItem from './ExpertiseItem';
import { expertiseData } from '../../utils/data';

function Expertise() {
  return (
    <div className="expertise__container">
      {expertiseData.map((expertise, index) => (
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
