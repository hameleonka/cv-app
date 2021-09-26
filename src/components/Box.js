function Box(props) {
  return (
    <div>
      <h3 className="box__title">{props.title}</h3>
      <p className="box__content">{props.content}</p>
    </div>
  );
}

export default Box;
