import './App.scss';
import { IopUi } from './Components/iopui';
import Container from 'react-bootstrap/Container';
import { Navbar, NavbarComponent } from './Components/Navbar';

function App() {
  return (
    <>
     <NavbarComponent />
      <IopUi />
    </>
  );
}

export default App;
