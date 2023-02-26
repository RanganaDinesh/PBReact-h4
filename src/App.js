import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar bg="primary" variant="dark">
        
         
          <Nav className="me-auto">
          <div>
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Students</Nav.Link>
            <Nav.Link href="#pricing">ContacUs</Nav.Link>
           </div>
          </Nav>
    
      </Navbar>
   
    </div>
  );
}

export default App;
