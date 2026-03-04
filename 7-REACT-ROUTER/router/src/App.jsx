import "./App.css";

import { Outlet } from "react-router-dom";

//5 - link entre paginas

// search params
import NavBar from "./componets/Navbar";

// search params (form)
import Searchforms from "./componets/Searchforms";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Searchforms />
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
