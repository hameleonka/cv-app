function PortfolioInfo(props) {
  return (
    <div className="portfolioInfo__container">
      <h4 className="portfolioInfo__title">{props.title}</h4>
      <p className="portfolioInfo__text">{props.text}</p>
      <a className="portfolioInfo__link" href={props.url}>View resource</a>
    </div>
  )
}

export default PortfolioInfo;