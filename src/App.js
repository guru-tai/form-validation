import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import User from './components/User';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </Router>
  );
}

export default App;
