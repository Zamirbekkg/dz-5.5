import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Page from './components/page/Page.jsx';

function App() {
  return (
  <BrowserRouter>
    <Header />
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/page' element={<Page/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
