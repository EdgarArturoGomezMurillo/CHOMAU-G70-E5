import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login'


import {Container} from 'react-bootstrap';



function App() {
  return (
    
    <div className="App">
      <Container>
      <Login />
    </Container>
    </div>
  );
}

export default App;
