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
import DashboardLayoutPatient from './sidenavPatient/DashboardLayoutPatient';
import { MyInquiries } from './Dashboard Patient/MyInquiries';
import { MyBooking } from './Dashboard Patient/MyBooking';
import { OrderReceipts } from './Dashboard Patient/OrderReceipts';
import PInvoicedetails from './Dashboard Patient/Calender/PInvoicedetails';
import Myprofile from './Dashboard Patient/Myprofile';
import SingeupStepForm from './components/SingeupStepForm';



function App() {
  return (<div>
    <Routes>
    <Route path='/singeupstepform' element={<SingeupStepForm/>} /> 
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
        <Route path='/meet' element={<Meet/>}/>
        <Route path='/updateprofile' element={<Updateprofile/>}/>
      </Route>

      <Route element={<DashboardLayoutPatient/>}>
       <Route path='/patient-inquiries' element={<MyInquiries/>}/>
        <Route path='/patient-booking' element={<MyBooking/>}/>
        <Route path='/patient-calendar' element={<Calender/>}/>
        <Route path='/patient-message' element={<Message/>}/>
        <Route path='/patient-inovice' element={<OrderReceipts/>}/>
        <Route path='/patient-details' element={<PInvoicedetails/>}/>
        <Route path='/meet' element={<Meet/>}/>
        <Route path='/my-profile' element={<Myprofile/>}/>
      </Route>

    </Routes>


    </div>
  );
}

export default App;
