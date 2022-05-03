import './App.css';
import Header from './Pages/SharePages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import VisitDetails from './Pages/VisitDetails/VisitDetails';
import Login from './Pages/Login/Login';
import Registered from './Pages/Registered/Registered';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<VisitDetails></VisitDetails>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registered' element={<Registered></Registered>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
      </Routes>



    </div>
  );
}

export default App;
