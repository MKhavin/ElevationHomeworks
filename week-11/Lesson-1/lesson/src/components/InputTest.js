import { useState } from "react";

const InputTest = () => {
  const [text, setInputValue] = useState("");
  const [isChecked, setCheckedStatus] = useState("");

  const updateText = (event) => {
    setInputValue(event.target.value);
  };

  const updateCheck = (event) => {
    setCheckedStatus(event.target.checked);
    console.log("Checked");
  };

  return (
    <div>
      <input type="text" value={text} onChange={updateText} />
      <input type="checkbox" checked={isChecked} onChange={updateCheck} />
      <button>Alert</button>
    </div>
  );
};

export default InputTest;
