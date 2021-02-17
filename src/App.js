import './App.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/action";
import { decrement } from "./actions/action";


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <Button style={{background:'green'}} onClick={() => dispatch(increment(5))} ><AddIcon /></Button>
      <Button style={{background:'red'}} onClick={() => dispatch(decrement())} ><RemoveIcon /></Button>

      {/* {!isLogged ? <h3>Log in </h3>> : ''} */}
    </div>
  );
}

export default App;
