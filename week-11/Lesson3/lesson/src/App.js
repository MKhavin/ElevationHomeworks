import { useState, useEffect } from 'react'
import "./App.css"
import { getColors } from './data'


function App() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [titles, setTitles] = useState([])

  const updateTitle = () => {
    setTitleIndex(titleIndex + 1);
  }

  useEffect(() => {
    const getData = async () => {
      const colors = await getColors()
      setTitles(colors)
    }
    getData()
  }, [])

  useEffect(() => {
    setTimeout(updateTitle, 1000)
  }, [titleIndex])

  return (
    <div>
      <div className="box">{titles[titleIndex]}</div>
    </div>
  );
}



export default App;
