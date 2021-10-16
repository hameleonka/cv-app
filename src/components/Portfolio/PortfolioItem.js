import './portfolioItem.scss';

function PortfolioItem({
  filter, image, title, text, url,
}) {
  return (
    <div className={`portfolioItem__container filter-item ${filter}`}>
      <div className="portfolioItem__image">
        <img src={image} alt="project" />
      </div>
      <div className="portfolioItem__info">
        <h4 className="portfolioItem__title">{title}</h4>
        <p className="portfolioItem__text">{text}</p>
        <a className="portfolioItem__link" href={url} target="_blank" rel="noreferrer">View resource</a>
      </div>
    </div>
  );
}

export default PortfolioItem;
