import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route  path="/" Component={Home}/>
        <Route path="/signin" Component={Signin}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
