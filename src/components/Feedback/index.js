import FeedbackItem from "./FeedbackItem";

function Feedback(props) {
  return (
    <div>
      {props.data.map((feedback, index) => (
        <FeedbackItem
          key={index}
          feedback={feedback.feedback}
          name={feedback.reporter.name}
          citeUrl={feedback.reporter.citeUrl}
        />
      ))}
    </div>
  )
}

export default Feedback;