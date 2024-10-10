import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistPage   from './components/RegistPage';
import LoginPage    from './components/LoginPage';
import MainPage     from './components/MainPage';
import GamePage     from './components/GamePage';
import ProfilePage  from './components/ProfilePage';
import TestPage     from './components/TestPage';

function App() {

  return (
    <Router>
        <Routes>
           {/* <Route path="/"           element={<HomePage />}></Route> */}
            <Route path="/"           element={<LoginPage />}></Route>
            <Route path="RegistPage"  element={<RegistPage />}></Route>
            <Route path="MainPage"    element={<MainPage />}></Route>
            <Route path="GamePage"    element={<GamePage />}></Route>
            <Route path="ProfilePage" element={<ProfilePage />}></Route>
            <Route path="TestPage"    element={<TestPage />}></Route> 
        </Routes>
    </Router>
  );
}

export default App;
