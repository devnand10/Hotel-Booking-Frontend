import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        
        <Route path='login' element={<Login/>}></Route>
        <Route path='admin' element={<Admin/>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
