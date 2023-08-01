import { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

function Exercise2(props) {
  const conversationsData = [
    {
      with: "Laura",
      convo: [
        { text: "Hi", sender: "self" },
        { text: "You there?", sender: "self" },
        { text: "Yeah, hi, what's up?", sender: "other" },
      ],
    },
    {
      with: "Dad",
      convo: [
        { text: "Have you finished your school work yet?", sender: "other" },
        { text: "Yes.", sender: "self" },
        { text: "What do you mean, yes?", sender: "other" },
        { text: "??", sender: "self" },
      ],
    },
    {
      with: "Shoobert",
      convo: [
        { text: "Shoobert!!!", sender: "self" },
        { text: "Dude!!!!!!!!", sender: "other" },
        { text: "Shooooooooo BERT!", sender: "self" },
        { text: "You're my best friend", sender: "other" },
        { text: "No, *you're* my best friend", sender: "self" },
      ],
    },
  ];

  const [displayConversation, setDisplayConversation] = useState(null);

  const displayConvo = (contact) => {
    setDisplayConversation(contact);
  };

  return (
    <div id="ex-2">
      {displayConversation === null ? (
        <List
          contacts={conversationsData.map((conversation) => conversation.with)}
          displayConvo={displayConvo}
        />
      ) : (
        <Conversation
          conversation={conversationsData.find(
            (data) => data.with === displayConversation
          )}
          displayList={displayConvo}
        />
      )}
    </div>
  );
}

export default Exercise2;
