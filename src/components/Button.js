function Button(props) {
    return (
        <button className="button">{props.icon}{props.text}</button>
    )
}

export default Button;