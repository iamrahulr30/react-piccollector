import React from "react"
import { BrowserRouter , Navigate, Route , Routes} from "react-router-dom"
import { Home } from "./pages/Home";
import  { Navbar } from "./Components/Navbar"
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/profile";
import { Login } from "./pages/Login";
import { useAuthContext } from "./Hooks/useAuthContext";


function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
              <Route path = "/signup"
              element = {!user ? <SignUp /> : <Navigate to="/"/>}
              />
              <Route path = "/login"
              element = {!user ? <Login /> : <Navigate to="/"/>}
              />
              <Route path = "/"
              element = {<Home />}
              />
              <Route path = "/profile"
              element = {user ? <Profile /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
