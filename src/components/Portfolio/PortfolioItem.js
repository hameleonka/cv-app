import './portfolioItem.scss';

function PortfolioItem({
  filter, image, title, text, demoUrl, codeUrl,
}) {
  return (
    <div className={`portfolioItem__container filter-item ${filter}`}>
      <div className="portfolioItem__image">
        <img src={image} alt="project" />
      </div>
      <div className="portfolioItem__info">
        <h4 className="portfolioItem__title">{title}</h4>
        <p className="portfolioItem__text">{text}</p>
        <a className="portfolioItem__link" href={demoUrl} target="_blank" rel="noreferrer">View demo</a>
        <a className="portfolioItem__link" href={codeUrl} target="_blank" rel="noreferrer">View code</a>
      </div>
    </div>
  );
}

export default PortfolioItem;
