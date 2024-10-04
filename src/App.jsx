import "./App.css";
import Home from "./pages/Home.jsx";
import Mytoken from "./pages/Mytoken.jsx";
import Mytoken2 from "./pages/Mytoken2.jsx";
import Mytoken3 from "./pages/Mytoken3.jsx";
import LaunchToken from "./pages/LaunchToken.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./pages/dashboard/Footer.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/mytoken" exact element={<Mytoken />}></Route>
          <Route path="/mytoken2" exact element={<Mytoken2 />}></Route>
          <Route path="/mytoken3" exact element={<Mytoken3 />}></Route>
          <Route path="/launch_token" exact element={<LaunchToken />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
