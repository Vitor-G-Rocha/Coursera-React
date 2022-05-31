import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

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
      <Menu />      
    </>
  );
}

export default App;
