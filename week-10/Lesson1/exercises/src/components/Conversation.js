import Message from "./Message";

function Conversation(props) {
  const backButtonClicked = () => props.displayList(null)

  return (
    <div>
      {props.conversation.convo.map((message) => (
        <Message
          sender={message.sender}
          contact={props.conversation.with}
          text={message.text}
        />
      ))}
      <br></br>
      <button onClick={backButtonClicked}>Back</button>
    </div>
  );
}

export default Conversation;
