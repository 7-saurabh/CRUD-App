
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Navbar from './components/layout/Navbar';
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import Emplisting from './Emplisting';
import Empcreate from './Empcreate';
import Empedit from './Empedit';

function App() {
  return (
    <div className="App">

      
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Emplisting/>}></Route>
      <Route path='/employee/create' element={<Empcreate/>}>   </Route>
      <Route path='/employee/edit/:empid' element={<Empedit/>}>   </Route>


    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
