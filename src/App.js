
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Signup from './components/Signup'
import { OrderCard } from './components/OrderCard';
import { OrderOnline } from './components/OrderOnline';
import { TableReserveForm } from './components/TableReserveForm';
import { Reservations } from './components/Reservations';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='/home'element={<Homepage/>} />
        <Route path='/signup'element={<Signup/>} />
        <Route path='/order'element={<OrderOnline/>} />
        <Route path='/table'element={<TableReserveForm/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
