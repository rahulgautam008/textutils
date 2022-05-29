import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React, {useState} from 'react';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not;
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#343a40';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
  <>
  <Navbar title="Textutils"  mode ={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading = " Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode ={mode}/>
  </div>
  </>
  );
}

export default App;