function PhotoBox(props) {
  const containerClass = props.styles === 'panel' ? 'photobox__container photobox__container--panel' : 'photobox__container';
  const imgClass = props.styles === 'panel' ? 'photobox__img photobox__img--panel' : 'photobox__img';
  const nameClass = props.styles === 'panel' ? 'photobox__name photobox__name--panel' : 'photobox__name';

  return (
    <div className={containerClass}>
      <img className={imgClass} src={props.avatar} alt="programmer" />
      <h1 className={nameClass}>{props.name}</h1>
      {
        props.title !== "" && (
          <h2 className="photobox__title">{props.title}</h2>
        )
      }
      {
        props.description !== "" && (
          <p className="photobox__text">{props.description}</p>
        )
      }
    </div>
  )
}

export default PhotoBox;