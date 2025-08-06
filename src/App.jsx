import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { login , logout } from "./features/counterSlice";
import { useState } from "react";

function App() {

  const dispatch = useDispatch();
  const[uinput,setUserInput] = useState('');
  const[pinput,setPassInput] = useState('');

  const username = useSelector((state)=> state.login.username);
  const password = useSelector((state)=>  state.login.password);

  const handleSubmit = () => {
    dispatch(login({username : uinput, password : pinput}));
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className="text-center mt-10">
      <label> Username : </label>
      <input 
      value={uinput}
      type="text"
      required
      placeholder="Enter your username" 
      onChange={(e)=> setUserInput(e.target.value)}
      />
      <br />
      <label> Password : </label>
      <input 
      value={pinput}
      type="password"
      required
      placeholder="Enter the password"
      onChange={(e)=> setPassInput(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Login</button><br />
      <button onClick={handleLogout}>Logout</button>

      <div>
        <h2>Logged in Username : {username}</h2>
        <h2>Logged in Password : {password}</h2>
      </div>
    </div>
  )
}

export default App