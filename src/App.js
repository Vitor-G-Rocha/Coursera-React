import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">          
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>      
    </>
  );
}

export default App;
