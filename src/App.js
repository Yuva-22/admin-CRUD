import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>CRUD OPERATIONS</h1>
      <Router>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/create" element={<Add />} />
             <Route path="/edit" element={<Edit />} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
