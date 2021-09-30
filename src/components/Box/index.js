import './index.scss';

function Box(props) {
  return (
    <div>
      <h3 className="box__title">{props.title}</h3>
      <p className="box__content">{props.content}</p>
      {props.component && (
        <div>{props.component}</div>
      )}
    </div>
  );
}

export default Box;
