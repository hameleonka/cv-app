import './expertiseItem.scss';

function ExpertiseItem({
  company, date, job, description,
}) {
  return (
    <div className="expertiseItem__container">
      <div>
        <h4 className="expertiseItem__company">{company}</h4>
        <span className="expertiseItem__date">{date}</span>
      </div>
      <div>
        <h4 className="expertiseItem__company">{job}</h4>
        <p className="expertiseItem__description">{description}</p>
      </div>
    </div>
  );
}

export default ExpertiseItem;
