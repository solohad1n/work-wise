import { Header } from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {<Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
