import TimelineItem from "./timelineItem";

import './index.scss';

function Timeline(props) {
  return (
    <ul className="timeline__list">
     
        {props.data.map((timelineItem, index) => (
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
  )
}

export default Timeline;