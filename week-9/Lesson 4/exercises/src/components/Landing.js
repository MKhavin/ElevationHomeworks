function Landing(props) {
  const hottestItem = props.userData.store.toSorted(
    (a, b) => b.price - a.price
  )[0];

  return (
    <div>
      <h1>Landing</h1>
      <p>Welcome, {props.userData.user}</p>
      <p>
        The hottest item is {hottestItem.item} for ${hottestItem.price}
      </p>
    </div>
  );
}

export default Landing;
