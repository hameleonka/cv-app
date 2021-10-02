import './index.scss';

function PhotoBox({
  styles, avatar, name, title, description,
}) {
  const isPanel = styles === 'panel';
  const containerClass = isPanel ? 'photobox__container photobox__container--panel' : 'photobox__container';
  const imgClass = isPanel ? 'photobox__img photobox__img--panel' : 'photobox__img';
  const nameClass = isPanel ? 'photobox__name photobox__name--panel' : 'photobox__name';

  return (
    <div className={containerClass}>
      <img className={imgClass} src={avatar} alt="programmer" />
      <h1 className={nameClass}>{name}</h1>
      {
        title && (
          <h2 className="photobox__title">{title}</h2>
        )
      }
      {
        description && (
          <p className="photobox__text">{description}</p>
        )
      }
    </div>
  );
}

export default PhotoBox;
