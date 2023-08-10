import { useState, useEffect } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);
    setTimerId(id);

    return () => {
      clearTimeout(timerId);
    };
  }, [time]);

  return <h1>{time}</h1>;
}

export default CurrentTime;
