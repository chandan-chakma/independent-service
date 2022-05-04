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
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Footer from './Pages/SharePages/Footer/Footer';


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

        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>



    </div>
  );
}

export default App;
