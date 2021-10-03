import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

function Loader() {
  return (
    <i className="loader"><FontAwesomeIcon icon={faSyncAlt} className="fa-2x" /></i>
  );
}

export default Loader;
