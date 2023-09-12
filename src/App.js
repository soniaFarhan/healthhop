import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from './components/Layout';

function App() {
  return (<div>
    <Routes>
      <Route path='layout' element={<Layout/>}/>

    </Routes>


    </div>
  );
}

export default App;
