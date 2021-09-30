import './timelineItem.scss';

function TimelineItem(props) {
  return (
    <>
      <div className="timelineItem__date">{props.date}</div>
      <div className="timelineItem__event">
        <h4 className="timelineItem__title">{props.title}</h4>
        <p className="timelineItem__text">{props.text}</p>
      </div>
    </>
  )
}

export default TimelineItem;