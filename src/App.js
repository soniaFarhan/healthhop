import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

function App() {
  return (<div>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        
        </Route>
    </Routes>


    </div>
  );
}

export default App;
