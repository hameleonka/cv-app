import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

function Button({
  icon, text, classes, onClickHandler,
}) {
  return (
    <button
      type="button"
      className={`button ${classes}`}
      onClick={onClickHandler}
    >
      <i><FontAwesomeIcon icon={icon} className="fa-fw" /></i>
      <span>{text}</span>
    </button>
  );
}

export default Button;
