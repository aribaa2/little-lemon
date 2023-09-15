
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Signup from './components/Signup'
import { OrderOnline } from './components/OrderOnline';
import { Main } from './components/Main';
import { ConfirmedBooking } from './components/ConfirmedBooking';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='/home'element={<Homepage/>} />
        <Route path='/signup'element={<Signup/>} />
        <Route path='/order'element={<OrderOnline/>} />
        <Route path='/table'element={<Main/>} />
        <Route path='/confirmed'element={<ConfirmedBooking/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
