import { useState } from 'react'
import './App.css'
import TopForm from './components/TopForm';
import MidForm from './components/MidForm';
import LastForm from './components/LastForm';
import Button from './components/Button';

function App() {
  const [mode, setMode] = useState(true);

  const handleModeChange = () => {
      setMode(!mode);
  }

  return (
    <>
      <h1>Cv resume</h1>
      <TopForm mode={mode}/>
      <span className='line'></span>
      <MidForm mode={mode}/>
      <span className='line'></span>
      <LastForm mode={mode}/>
      <span className='line'></span>

      <Button mode={mode} func={handleModeChange} />
    </>
  )
}

export default App
