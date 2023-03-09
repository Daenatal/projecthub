import { Routes, Route } from 'react-router-dom';


import Home from "./routes/home/home.component";
import Movies from './routes/movies/movies.component';
import Navigation from './routes/navigation/navigation.component';
//import Navbar from './routes/navigation/navigation-reactive.component';
import Games from './routes/games/games.component';
import Shows from './routes/shows/shows.component';
import Projects from './routes/projects/projects.component';
import Hobbies from './routes/hobbies/hobbies.component';


const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='games' element={<Games />} />
        <Route path='shows' element={<Shows />} />
        <Route path='projects' element={<Projects />} />
        <Route path='hobbies' element={<Hobbies />} />
      </Route>
    </Routes>
  );
};

export default App;