import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [Mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    },2000)

  };

  const togglemode = () =>{
    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");

    }
  }
  return (
    <>
    
      <Navbar title="TextUtils" about="About" Mode={Mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter the text below to analyze" Mode={Mode}/>
      </div>

    {/* <Router>
      <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" Mode={Mode}/>} />
          <Route exact path="/about" element={<About Mode={Mode} />} />
        </Routes>
      </div>   
    </Router> */}
    </>
  );  
}

export default App;