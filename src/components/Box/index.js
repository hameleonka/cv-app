import Loader from '../Loader';
import Error from '../Error';

import './index.scss';

function Box({
  title, content, component, id, showLoader, showError, showComponent,
}) {
  return (
    <div id={id} className="box__container">
      <h3 className="box__title">{title}</h3>
      {content && (
      <p className="box__content">{content}</p>
      )}

      { showLoader && (
      <Loader />
      )}
      { showError && (
      <Error />
      )}
      {component && showComponent && (
        <div>{component}</div>
      )}
    </div>
  );
}

export default Box;
