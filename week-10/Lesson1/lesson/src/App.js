import { useState } from "react"
import Task from "./components/Task"

function App() {
  let [data, setTasks] = useState({
    tasks: [
      { text: "Take out trash", complete: false },
      { text: "Trash talk Carrie", complete: true },
      { text: "Carry boxes upstairs", complete: false }
    ]
  })

  const taskComplete = (taskText) => {
    const taskIndex = data.tasks.findIndex(task => task.text === taskText)
    const newData = JSON.parse(JSON.stringify(data))

    newData.tasks.splice(taskIndex, 1)

    setTasks(newData)
  }
  return (
    <div className="App">
      {data.tasks.filter(task => !task.complete).map(task => <Task key={task.text} task={task} completeClicked={taskComplete} />)}
    </div>
  );
}

export default App;
