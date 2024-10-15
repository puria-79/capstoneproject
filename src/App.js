import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './Pages/Homepage';
import Menu from './Pages/Menu';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
