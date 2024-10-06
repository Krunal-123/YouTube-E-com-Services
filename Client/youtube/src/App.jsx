import Login from '../components/Login.jsx';
import Signup from './Signup.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './HomePage.jsx';
import About from './Aboutus.jsx';
import Contact from './Contactus.jsx';
import Error from "../components/Error.jsx"
import Services from './Services.jsx';
import DetailCard from './DeatilCard.jsx'
import Addcart from './Addcart.jsx'
import Mypurchase from './Mypurchase.jsx'
import Myprofile from './Myprofile.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPassword from './ForgotPassword.jsx';
import ResetPassword from './ResetPassword.jsx';
import Myfavourites from './Myfavourites.jsx'
import OrderHistory from './OrderHistory.jsx';
import Review from './Review.jsx'
import WriteReviewPage from './CreateReview.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}>
      <Route path='/home' element={<Services/>}/>
      <Route path='/myprofile' element={<Myprofile/>}/>
      <Route path='/mypurchase' element={<Mypurchase/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='services/:id' element={<DetailCard/>}/>
      <Route path='/addcart' element={<Addcart/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/myfavourites' element={<Myfavourites/>}/>
      <Route path='/orderhistory' element={<OrderHistory/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password/:email" element={<ResetPassword />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App
