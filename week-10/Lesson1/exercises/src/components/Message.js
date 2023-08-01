function Message(props) {
  return (
    <div>
      <span class="sender">
        {props.sender === "self" ? "Me: " : `${props.contact}: `}
      </span>
      "{props.text}"
    </div>
  );
}

export default Message;
