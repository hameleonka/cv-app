import TimelineItem from './timelineItem';

import './index.scss';

function Timeline({ data }) {
  return (
    <ul className="timeline__list">

      {data.map((timelineItem, index) => (
        <li>
          <TimelineItem
            key={index}
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
