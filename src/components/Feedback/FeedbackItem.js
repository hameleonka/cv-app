import './feedbackItem.scss';

function FeedbackItem({ feedback, name, citeUrl }) {
  return (
    <div className="feedbackItem__container">
      <p className="feedbackItem__feedback">{feedback}</p>
      <div className="feedbackItem__reporter-container">
        <img src="https://hameleonka.github.io/cv-app/images/feedback_img.png" alt="person who wrote a feedback" />
        <span className="feedbackItem__reporter-name">
          {name}
          ,
          {' '}
          <a href={citeUrl}>{citeUrl}</a>
        </span>
      </div>
    </div>
  );
}

export default FeedbackItem;
