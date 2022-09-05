import "./index.css";

import Navbar from "./navigation/NavBarTailWind";
import ServerTable from "./components/servertable"

export default function App() {
    return (
      <div>
        <Navbar />
        <ServerTable />
      </div>
    );
}