import './App.css';
import Header from './components/main/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainRoutes from './pages/main/mainRoutes';
import Login from './pages/common/Login';
import { useEffect } from 'react';
import pathName from './pathname';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const location = useLocation();
  const delay = 3000;
  const notify = text => {

    toast('🦄 '+ text +'!', {
      position: "bottom-right",
      autoClose: delay,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  };

  useEffect(() => {


    notify(location.pathname);

  }, [location]);

  return <div className="App">

    {/* login doesn't required header */}
    {
      location.pathname === pathName.LOGIN ? null: <Header />
    }
    
    <Routes>

      <Route path='login' element={<Login />}/>
      {
        MainRoutes.map((route, index) => {

          return <Route path={route.path} element={route.component} key={index}/>
        })
      }
      
    </Routes>
    <ToastContainer
        position="bottom-right"
        autoClose={delay}
        hideProgressBar = {true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  </div>
  
}

export default App;
