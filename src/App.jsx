import { Routes, Route } from 'react-router-dom';


import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Navbar from './routes/navigation/navigation-reactive.component';


const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Navbar><li>X</li></Navbar>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;