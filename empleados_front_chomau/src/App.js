<<<<<<< HEAD
//import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/login';
import Menu from './components/navbar/navbar';

import AppRouter from './components/routers/router';

function App() {
  return (
      <div className="App">
        <Menu />
        <AppRouter />

        {/* <Login/> */}
=======
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
>>>>>>> 8229ae6241da991848afe1381969a4bfa306c0be
    </div>
  );
}

export default App;
