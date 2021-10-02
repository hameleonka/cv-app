import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

function Button({
  icon, text, classes, page,
}) {
  const history = useHistory();
  const handleClick = () => history.push(`/${page}`);

  return (
    <button
      type="button"
      className={`button ${classes}`}
      onClick={handleClick}
    >
      <i><FontAwesomeIcon icon={icon} className="fa-fw" /></i>
      <span>{text}</span>
    </button>
  );
}

export default Button;
