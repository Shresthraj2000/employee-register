// import logo from './logo.svg';
// import './App.css';
// import Contacts from './components/Contacts';
// //import background from "./low_poly_banner_design_1711.jpg";
// function App() {
//   return (
//     <div className="row container-fluid homepage-bgimage">
//       <div className="col-md-8 offset-md-2">
//         <Contacts />
//       </div>
//     </div>
//   );
// }
// export default App;

import React from "react"
import Signup from "./components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes} from "react-router-dom"

// import Dashboard from "./Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import './App.css';
import Contacts from './components/Contacts';

function App() {
  
  return (
    <Container
      className="row d-flex justify-content-center container-fluid homepage-bgimage"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "1100px" }}>

        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute exact path="/" component={Contacts} />
              {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
