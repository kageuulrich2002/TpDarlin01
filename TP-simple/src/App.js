import './App.css';
import './css/cssPrincipal.css'

import {Routes , Route} from 'react-router-dom'

import Header from './pages/header';
import Navigation from './pages/navigation';
import Home from './pages/home';
import AddFruits from './pages/addFRuit';
import { useState } from 'react';
import DeleteFruit from './pages/deleteFRuit';

function App() {

  //  Soit cette liste
  const [fruits, setFruits] = useState([
    { id: 1, name: "Bannane" , prix:'100.Fcfa', quantité: '12_Q' },
    { id: 2, name: "Orange"  , prix:'50.Fcfa' , quantité: '18_Q' },
    { id: 3, name: "Citron"  , prix:'25.Fcfa', quantité: '29_Q' },
    { id: 4, name: "Mangue"  , prix:'100.Fcfa', quantité: '8_Q' },
    { id: 5, name: "Ananas"  , prix:'250.Fcfa' , quantité: '180_Q' },
    { id: 6, name: "Carotte"  , prix:'100.Fcfa', quantité: '32_Q' },
    { id: 7, name: "Avocat"  , prix:'200.Fcfa', quantité: '16_Q' }
  ])

  return (
    <>
        <Header />
        <Navigation />
          <div className='container'>
            <Routes >
                <Route path='/' element={<Home fruits={fruits}  setFruits={setFruits}/>} />
                <Route path='/add' element={<AddFruits fruits={fruits}  setFruits={setFruits} />} />
                <Route path='/delete' element={<DeleteFruit fruits={fruits}  setFruits={setFruits} />} />
            </Routes>
          </div>
    </>
  );
}

export default App;
