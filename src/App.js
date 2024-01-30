import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Product from './components/Product'
import Bar from './components/Bar';
import Model from './components/Model';
import Brend from './components/Brand';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='bar--wraper '>
      <Bar/>
        <Routes className='rout'>
          <Route path='/brand' element={<Brend/>}/>
          <Route path='/model' element={<Model/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
