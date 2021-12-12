import './App.css';
import Header from './components/main/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoutes from './pages/main/mainRoutes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        {
          MainRoutes.map((route, index) => {

            return <Route path={route.path} element={route.component}/>
          })
        }
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
