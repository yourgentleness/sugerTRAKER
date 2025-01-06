import './App.css'
import Navbar from './conponents/commont/navbar/navbar';
import Dasbord from './conponents/section/dasbord';
import FunEx from './conponents/section/funEx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./conponents/section/home";
import History from './conponents/section/history';
import Search from './conponents/section/search';
import Profile from './conponents/section/profile';

function App() {

  return (
      <Router>
        <div className='h-dvh p-4 md:pt-32 bg-slate-100'>
          <Navbar/>        
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/history' element={<History/>}/>
              <Route path='/Search' element={<Search/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Routes>
          </main>
          </div>
        </Router>
  )
}



export default App;
