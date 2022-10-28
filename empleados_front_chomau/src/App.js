import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login'
import menu from './components/navbar';

function App() {
  return (
    
    <div className="App">
      <Container>
      <Login />
      <menu/>
    </Container>
    </div>
  );
}

export default App;
