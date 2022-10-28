import './App.css';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { Repo } from './pages/Repo';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="user:login" element={<User/>}/>
        <Route path="user:login/repo:id" element={<Repo/>}/>
      </Route>
    </Routes>
  );
}

export default App;
