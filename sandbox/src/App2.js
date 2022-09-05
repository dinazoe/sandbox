import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
//import Navbar from "./Navigation/NavBar.js";
//import Navbar from "./NavBar.js";
import Navbar from "./Navigation/NavBarTailWind";
import ServerTable from './components/servertable';
//import NavScrollExample from './components/navbar';


export default function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}