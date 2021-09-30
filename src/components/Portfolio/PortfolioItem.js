import './portfolioItem.scss';

function PortfolioItem(props) {
  return (
    <div className={`portfolioItem__container filter-item ${props.filter}`}>
      <div className="portfolioItem__image">
        <img src={props.image} alt="project" />
      </div>
      <div className="portfolioItem__info">
        <h4 className="portfolioItem__title">{props.title}</h4>
        <p className="portfolioItem__text">{props.text}</p>
        <a className="portfolioItem__link" href={props.url}>View resource</a>
      </div>
    </div>
  )
}

export default PortfolioItem;