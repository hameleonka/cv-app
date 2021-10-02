import './timelineItem.scss';

function TimelineItem({ date, title, text }) {
  return (
    <>
      <div className="timelineItem__date">{date}</div>
      <div className="timelineItem__event">
        <h4 className="timelineItem__title">{title}</h4>
        <p className="timelineItem__text">{text}</p>
      </div>
    </>
  );
}

export default TimelineItem;
