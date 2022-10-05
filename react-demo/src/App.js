import logo from './logo.svg';
import './App.css';
//import MyComponent from './component/Greet';
import {Greet} from './component/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Bruce' heroNmae='Batman' />
      <Greet name='Clark' heroNmae='Superman' >
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroNmae='Wonder Women'>

        <p>This is children props</p>
        <button>Action</button>
      </Greet>
    </div>
  );
}

export default App;