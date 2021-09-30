import './feedbackItem.scss';

function FeedbackItem(props) {
  return (
    <div className="feedbackItem__container">
      <p className="feedbackItem__feedback">{props.feedback}</p>
      <div className="feedbackItem__reporter-container">
        <img src="/images/feedback_img.png" alt="person who wrote a feedback" />
        <span className="feedbackItem__reporter-name">{props.name}, <a href={props.citeUrl}>{props.citeUrl}</a></span>
      </div>
    </div>
  )
}

export default FeedbackItem;