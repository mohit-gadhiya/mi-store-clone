import './App.css';
import {PreNav,Navbar,Slider} from './components'
import {BrowserRouter as Router} from 'react-router-dom'
import data from './data/data.json'
function App() {
  return (
    <Router >
      <PreNav/>
      <Navbar/>
      <Slider start = {data.banner.start}/>
    </Router>
  );
}

export default App;
