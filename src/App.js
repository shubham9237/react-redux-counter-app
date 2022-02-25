import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './actions';
import classes from './App.module.css';

function App() {
  const myState = useSelector((state) => {
    return state.reduce
  });
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.container}>
        <h1>
          Incremenet Decrement count.
        </h1>
        <button onClick={() => dispatch(decNumber())} className={classes.incDec} title='Decrement'><span>-</span></button>
        <input type="text" value={myState}></input>
        <button onClick={() => dispatch(incNumber())} className={classes.incDec} title='Increment'><span>+</span></button>
      </div>
    </>
  );
}

export default App;
