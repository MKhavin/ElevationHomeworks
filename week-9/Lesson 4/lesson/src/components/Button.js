function Button(props) {
  function buttonOnHover() {
    console.log("I was hovered!");
  }

  return (
    <button onMouseEnter={buttonOnHover} onClick={props.click}>
      {props.title ? props.title : "Hover me"}
    </button>
  );
}

export default Button;
