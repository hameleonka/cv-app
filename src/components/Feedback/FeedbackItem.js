
import personPhoto from '../../assets/images/feedback_img.png';

function FeedbackItem(props) {
  return (
    <div>
      <p>{props.feedback}</p>
      <div>
        <img src={personPhoto} alt="person who wrote a feedback" />
        <span>{props.name}, <a href={props.citeUrl}>{props.citeUrl}</a></span>
      </div>
    </div>
  )
}

export default FeedbackItem;