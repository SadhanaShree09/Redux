import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { decrease, increase ,reset } from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Counter : {counter} </h2>
      <div>
        <button onClick={()=> dispatch(increase())}>Increase</button>
        <button onClick={()=> dispatch(decrease())}>Decrease</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
};

export default App;