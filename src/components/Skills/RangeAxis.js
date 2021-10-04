import './rangeAxis.scss';

function RangeAxis() {
  return (
    <div className="rangeAxis">
      <div>
        <div className="rangeAxis__mark" />
        <div className="rangeAxis__mark" />
        <div className="rangeAxis__mark" />
        <div className="rangeAxis__mark" />
      </div>
      <div>
        <span className="rangeAxis__level">Beginner</span>
        <span className="rangeAxis__level">Proficient</span>
        <span className="rangeAxis__level">Expert</span>
        <span className="rangeAxis__level"> Master</span>
      </div>
    </div>
  );
}

export default RangeAxis;
