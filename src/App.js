import { BrowserRouter , Route , Routes , Link } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/site" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
