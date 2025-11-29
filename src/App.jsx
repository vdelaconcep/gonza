import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';
import '@/style.css';
import Layout from '@/sections/layout';
import Principal from '@/sections/principal';
import Botones from '@/sections/botones';
import AnimacionContinua from '@/sections/continua';

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Principal />} />
            <Route path='/botones' element={<Botones />} />
            <Route path='/animaciones/continua' element={<AnimacionContinua />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
