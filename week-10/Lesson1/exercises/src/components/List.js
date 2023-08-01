import Contact from "./Contact";

function List(props) {
  return (
    <div>
      {props.contacts.map((contact) => (
        <Contact
          key={contact}
          name={contact}
          displayConvo={props.displayConvo}
        />
      ))}
    </div>
  );
}

export default List;
