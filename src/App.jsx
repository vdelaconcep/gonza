import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/style.css';
import Layout from '@/sections/layout';
import Principal from '@/sections/principal';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Principal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
