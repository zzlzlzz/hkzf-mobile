import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 默认路由 */}
          <Route
            path="/"
            exact
            element={<Navigate replace to="home" />}
          ></Route>
          <Route path="/home/*" element={<Home />} />
          <Route path="/citylist" element={<CityList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
