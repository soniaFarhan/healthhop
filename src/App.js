import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import { OurBlogs } from './pages/OurBlogs';
import {HealthJourney} from './pages/HealthJourney.jsx'
import { LearnMore } from './pages/LearnMore';
import InstantBooking from './pages/InstantBooking';
import { PaymentMethod } from './pages/PaymentMethod';
import { Procedures } from './pages/Procedures';
import DashboardLayout from './sidenav/DashboardLayout';
import { Inquiries } from './Dashboard/Inquiries';
import { ConfirmedBooking } from './Dashboard/ConfirmedBooking';
import { Packges } from './Dashboard/Packges';
import { Message } from './Dashboard/Message';
import { Inovice } from './Dashboard/Inovice';
import { BusinessProfile } from './Dashboard/BusinessProfile';
import Calender from './Dashboard/Calender/Calender';
import Login from './components/Login';
import Invoicedetails from './Dashboard/Calender/Invoicedetails';
import Meet from './Dashboard/Meet';
import Updateprofile from './Dashboard/Updateprofile';



function App() {
  return (<div>
    <Routes>

        <Route path='/' element={<Login/>} />
      <Route element={<Layout/>}>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/heath-journey'  element={<HealthJourney/>} />
        <Route path='/contact-us' element={<ContactUs/>} />  
        <Route path='/blogs' element={<OurBlogs/>} /> 
        <Route path='/learn-more' element={<LearnMore/>} />  
        <Route path='/procedure' element={<Procedures/>} />
        <Route path='/instatnt-booking' element={<InstantBooking/>}/>  
        <Route path='/payment-method' element={<PaymentMethod/>} /> 
       
      </Route>

      <Route element={<DashboardLayout/>}>
        <Route path='/inquiries' element={<Inquiries/>}/>
        <Route path='/confirmed-booking' element={<ConfirmedBooking/>}/>
        <Route path='/packages' element={<Packges/>}/>
        <Route path='/calendar' element={<Calender/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/inovice' element={<Inovice/>}/>
        <Route path='/Invoice-details' element={<Invoicedetails/>}/>
        <Route path='/business-profile' element={<BusinessProfile/>}/>
        <Route path='/Meet' element={<Meet/>}/>
        <Route path='/Updateprofile' element={<Updateprofile/>}/>


      </Route>

    </Routes>


    </div>
  );
}

export default App;
