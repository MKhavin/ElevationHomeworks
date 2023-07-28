function Item(props) {
  return (
    <div>
      <hr></hr>
      <p>Item: {props.item}</p>
      <p>
        Price: $
        {Math.round(props.price * (props.discount ? 1 - 0.2 : 1) * 100) / 100}
      </p>
    </div>
  );
}

export default Item;
