import TimelineItem from './timelineItem';
import { timelineData } from '../../utils/data';

import './index.scss';

function Timeline() {
  return (
    <ul className="timeline__list">

      {timelineData.map((timelineItem, index) => (
        <li key={index}>
          <TimelineItem
            title={timelineItem.title}
            text={timelineItem.text}
            date={timelineItem.date}
          />
        </li>
      ))}

    </ul>
  );
}

export default Timeline;
