function ExpertiseItem(props) {
  return (
    <div className="expertiseItem__container">
      <div>
        <h4 className="expertiseItem__company">{props.company}</h4>
        <span className="expertiseItem__date">{props.date}</span>
      </div>
      <div>
        <h4 className="expertiseItem__company">{props.job}</h4>
        <p className="expertiseItem__description">{props.description}</p>
      </div>
    </div>
  )
}

export default ExpertiseItem;