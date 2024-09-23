import { useState } from 'react'
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

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
    } else {
      setCV((prevCv) => ({
        ...prevCv,
        [key]: value
      }))
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
    setCV({username: 'Zack', email: 'Zack@mail.ru', phone: '+7(123)123 12 34' ,schools: [{school: 'university', title: 'uer interface', date: '2004.06.12'}], companies: [{company: 'companyyy', position: 'user gay', responsibilities:'idk', startDate:'2005.04.26', endDate:'2006.04.26'}]})
  }

  return (
    <>
      <h1>CV Resume Generator</h1>
      <div className="cv-row">
        <LeftSideBar cv={cv} handleCvChange={handleCvChange} addItemsToArray={addItemsToArray} resetAll={resetAll} importExample={importExample}/>
        <RightSideBar cv={cv}/>
      </div>
    </>
  )
}

export default App
