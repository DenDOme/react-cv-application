import { useState } from 'react'
import LeftSideBar from './components/LeftSideBar';

function App() {
  const [cv, setCV] = useState({username: '', email: '', phone: '' ,schools: [], companies: []});

  const handleCvChange = (e, key, index=null, field=null) => {
    const value = e.target.value;

    if(index !== null && field){
      setCV((prevCv) => {
        const updatedArray = [...prevCv[key]]; 
        updatedArray[index] = {
          ...updatedArray[index],
          [field]: value
        };
        return{
          ...prevCv,
          [key]: updatedArray
        }
      })
    }
  }

  const addItemsToArray = (item, key) => {
    setCV((prevCv) => ({
      ...prevCv,
       [key]: [...prevCv[key] || [], item]
    }))
  }

  return (
    <>
      <h1>CV Resume Generator</h1>
      <LeftSideBar cv={cv} handleCvChange={handleCvChange} addItemsToArray={addItemsToArray}/>
    </>
  )
}

export default App
