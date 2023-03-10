import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComp from "./Components/Authentication/PrivateComp";
import Navbar from "./Components/navbar/Navbar";
import Logout from "./Components/Authentication/Logout";
import Like from "./Components/Like-Card/Like";
import Home from "./Components/Home";
// import Footer from "./Components/Footer";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Video from "./Components/Video";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<PrivateComp /> } >
        <Route path="/" element={<Home/> } />
        <Route path="/like" element={<Like/> } />
        <Route path="/video" element={<Video/> } />
        <Route path="/logout" element={<Logout/> } />
        </Route>

        <Route path="/login" element={<Login/> } />
        <Route path="/signup" element={<Signup/> } />
      </Routes>
      </BrowserRouter>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
