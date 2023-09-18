import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import { OurBlogs } from './pages/OurBlogs';
import {HealthJourney} from './pages/HealthJourney.jsx'
import { Procedure } from './pages/Procedure';
import InstantBooking from './pages/InstantBooking';
import { PaymentMethod } from './pages/PaymentMethod';



function App() {
  return (<div>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/heath-journey'  element={<HealthJourney/>} />
        <Route path='/contact-us' element={<ContactUs/>} />  
        <Route path='/blogs' element={<OurBlogs/>} /> 
        <Route path='/procedure' element={<Procedure/>} />  
        <Route path='/instatnt-booking' element={<InstantBooking/>}/>  
        <Route path='/payment-method' element={<PaymentMethod/>} /> 
      </Route>
    </Routes>


    </div>
  );
}

export default App;
