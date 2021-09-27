import PortfolioInfo from "./PortfolioInfo";
import { portfolioData } from "./PortfolioData";

function PortfolioList() {
  return (
    <div className="portfolioList__container">
      {portfolioData.map((project, index) => (
        <PortfolioInfo
          key={index}
          title={project.title}
          text={project.text}
          url={project.url}
        />
      ))
      }
    </div>
  )
}

export default PortfolioList;