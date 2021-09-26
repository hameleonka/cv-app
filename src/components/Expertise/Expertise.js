import ExpertiseItem from "./ExpertiseItem";

function Expertise(props) {
  return (
    <div>
      {props.data.map((expertise, index) => (
      <ExpertiseItem
        key={index}
        date={expertise.date}
        company={expertise.info.company}
        job={expertise.info.job}
        description={expertise.info.description}
      />
    ))}
    </div>
  )
}

export default Expertise;