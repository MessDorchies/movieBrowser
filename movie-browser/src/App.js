import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import Serie from './components/Serie';
import Search from './components/Search';
import MyList from './components/MyList';
import './components/style/App.css';
import DisplayOneMovie from './components/DisplayOneMovie';
import DisplayOneSerie from './components/DisplayOneSerie';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Movie' element={<Movie />} />
        <Route path='/Serie' element={<Serie />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/MyList' element={<MyList />} />
        <Route path='/Movie/:id' element={<DisplayOneMovie />} />
        <Route path='/Serie/:id' element={<DisplayOneSerie />} />
      </Routes>
    </Router>
  );
}

export default App;
