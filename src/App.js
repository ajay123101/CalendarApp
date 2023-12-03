import "./App.css";
import Header from "./components/Header";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            
         <Route path="/" element={<><Header /></>}/>     
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;





