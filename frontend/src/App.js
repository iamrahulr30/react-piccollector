import React from "react"
import { BrowserRouter , Route , Routes} from "react-router-dom"
import { Home } from "./pages/Home";
import  { Navbar } from "./Components/Navbar"
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/profile";
import { Login } from "./pages/Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
              <Route path = "/signup"
              element = {<SignUp />}
              />
              <Route path = "/login"
              element = {<Login />}
              />
              <Route path = "/"
              element = {<Home />}
              />
              <Route path = "/profile"
              element = {<Profile />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
