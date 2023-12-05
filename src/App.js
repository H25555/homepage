import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import Driverpage from './component/Driverpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Homepage/>} />
        <Route path='driver-register' element = {<Driverpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
