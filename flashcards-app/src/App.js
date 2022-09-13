import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer';

import Questions from "./components/Questions/Questions";
import Categories from './components/Categories/Categories';

export default function App () {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Categories />
      </div>
      <Footer />
    </BrowserRouter>
  );
}