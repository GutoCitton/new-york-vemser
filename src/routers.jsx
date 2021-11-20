import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';
 
import Home from './Pages/Home';
import Cience from './Pages/Cience';
import Health from './Pages/Health';
import Politics from './Pages/Politics';
import World from './Pages/World';

import PagesProvider from './context/ContextProvider';
 
 

 function Routers() {
   return (
     <PagesProvider>
      <BrowserRouter>
        <Routes>
          <Route index path='/home' element={<Home />} />
          <Route path='/cience' element={<Cience />} />
          <Route path='/health' element={<Health />} />
          <Route path='/politics' element={<Politics />} />
          <Route path='/world' element={<World />} />
        </Routes>
      </BrowserRouter>
     </PagesProvider>
   )
 }

 export default Routers;