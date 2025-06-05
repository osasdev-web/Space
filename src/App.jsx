import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Tech from "./pages/tech";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/destination" element={<Destination />} />

        <Route path="/crew" element={<Crew />} />

        <Route path="/technology" element={<Tech />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
