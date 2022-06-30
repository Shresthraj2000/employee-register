import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
//import background from "./low_poly_banner_design_1711.jpg";
function App() {
  return (
    <div className="row container-fluid homepage-bgimage">
      <div className="col-md-8 offset-md-2">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
