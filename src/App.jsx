import HomePage from './pages/Home/HomePage';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import OurServices from './pages/Services/OurServices';
import Prices  from './pages/Prices/Prices';



function Fallback({ error }) {
  return (
    <div className="container py-3">
      <h5>Route crashed</h5>
      <pre style={{whiteSpace:'pre-wrap'}}>{error?.message}</pre>
    </div>
  )
}


function App() {
  return (
    <>
    <Header />
      <ErrorBoundary FallbackComponent={Fallback}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
           <Route path='/services' element= {<OurServices/>}></Route>
          <Route path='/price' element={<Prices/>}></Route>
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App