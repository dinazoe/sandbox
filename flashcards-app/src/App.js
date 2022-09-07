import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer';

export default function App () {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
      </div>
      <Footer />
    </BrowserRouter>
  );
}