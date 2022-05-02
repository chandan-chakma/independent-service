import './App.css';
import Header from './Pages/SharePages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import VisitDetails from './Pages/VisitDetails/VisitDetails';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<VisitDetails></VisitDetails>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>



    </div>
  );
}

export default App;
