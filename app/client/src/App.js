import './App.css';
import Header from './components/main/Header/Header';
// import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
    </div>
    </BrowserRouter>
  );
}

export default App;
