import './index.scss';

function Box({
  title, content, component, id,
}) {
  return (
    <div id={id} className="box__container">
      <h3 className="box__title">{title}</h3>
      {content && (
      <p className="box__content">{content}</p>
      )}
      {component && (
        <div>{component}</div>
      )}
    </div>
  );
}

export default Box;
