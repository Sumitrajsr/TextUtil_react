import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, SetMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "Succes");
      document.title = "Textutil-Dark Mode";
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Succes");
      document.title = "Textutil-Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Textutils"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      

      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text To analyze below"
          mode={mode}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
