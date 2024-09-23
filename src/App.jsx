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

  const resetAll = () => {
    setCV({username: '', email: '', phone: '' ,schools: [], companies: []})
  }

  const importExample = () => {
    setCV({username: 'Zack', email: 'Zack@mail.ru', phone: '+7(123)123 12 34' ,schools: [{school: 'university', title: 'uer interface', date: '12.06.2004'}], companies: [{company: 'companyyy', position: 'user gay', responsibilities:'idk', startDate:'26.04.2005', endDate:'26.04.2006'}]})
  }

  return (
    <>
      <h1>CV Resume Generator</h1>
      <LeftSideBar cv={cv} handleCvChange={handleCvChange} addItemsToArray={addItemsToArray} resetAll={resetAll} importExample={importExample}/>
    </>
  )
}

export default App
