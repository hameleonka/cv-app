import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

function RouterButton({
  icon, text, classes, page,
}) {
  const history = useHistory();
  const onClickHandler = () => history.push(`/${page}`);

  return (
    <Button
      icon={icon}
      text={text}
      classes={classes}
      onClickHandler={onClickHandler}
    />
  );
}

export default RouterButton;
