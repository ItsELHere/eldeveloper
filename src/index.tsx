import ReactDOM from 'react-dom/client';
import "./index.css";
import "animate.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './router/Home';
import Footer from "./components/Footer"
import NavigationBar from './components/NavigationBar';
import Contact from './router/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <NavigationBar />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);