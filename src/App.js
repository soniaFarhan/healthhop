import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';



function App() {
  return (<div>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<ContactUs/>} />        
      </Route>
    </Routes>


    </div>
  );
}

export default App;
