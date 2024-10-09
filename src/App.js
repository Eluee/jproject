import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistPage from './components/RegistPage';
import LoginPage  from './components/LoginPage';
import HomePage   from './components/HomePage';
import MainPage   from './components/MainPage';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/"           element={<HomePage />}></Route>
            <Route path="LoginPage"   element={<LoginPage />}></Route>
            <Route path="RegistPage"  element={<RegistPage />}></Route>
            <Route path="MainPage"    element={<MainPage />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
