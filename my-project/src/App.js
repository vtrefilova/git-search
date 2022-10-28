import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { Repo } from './pages/Repo';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user:login" element={<User/>}/>
      <Route path="/user:login/repo:id" element={<Repo/>}/>
    </Routes>
  );
}

export default App;
