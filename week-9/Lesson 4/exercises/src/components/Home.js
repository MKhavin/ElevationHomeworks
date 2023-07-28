import Item from "./Item";

function Home(props) {
  const discount = props.discount ? props.discount : false;

  return (
    <div>
      <h1>Items</h1>
      {props.store.map((item) => (
        <Item
          key={item.item}
          item={item.item}
          price={item.price}
          discount={discount}
        />
      ))}
    </div>
  );
}

export default Home;
