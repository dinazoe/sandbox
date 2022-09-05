import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import Sheeps from "./pages/Sheeps"
import Goats from "./pages/Goats"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Dogs} />
        <Route path='/cats' component={Cats} />
        <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} />
      </Routes>
    </Router>
  );
}