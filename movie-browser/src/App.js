import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Film from './components/Film';
import Serie from './components/Serie';
import Search from './components/Search';
import MyList from './components/MyList';
import './components/style/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Film' element={<Film />} />
        <Route path='/Serie' element={<Serie />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/MyList' element={<MyList />} />
      </Routes>
    </Router>
  );
}

export default App;
