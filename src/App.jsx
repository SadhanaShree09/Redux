import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addTodo , deleteTodo , toggleTodo } from "./features/counterSlice";
import { useState } from "react";

function App() {
  const[input,setInput] = useState('');
  const dispatch = useDispatch();
  const todoo = useSelector((state) => state.todoo.todoo);

  const handleAdd = () =>{
    if(input.trim()){
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  const handleKey = (e) => {
    if(e.key === 'Enter'){  
      handleAdd();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light text-gray-800 text-center mb-8">Todo List</h1>
        
        <div className="flex gap-3 mb-8">
          <input 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Add new task..."
            onKeyPress={handleKey}
          />

          <button 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
            onClick={handleAdd}
          >
            Add Task
          </button>
        </div>

        <div className="space-y-3 mb-8">
          {todoo.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Your todo list is empty</p>
              <p className="text-gray-400 mt-2">Add a task to get started!</p>
            </div>
          ) : (
            todoo.map((todo) => (
              <div 
                key={todo.id} 
                className={`flex items-center p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                  todo.completed
                    ? 'bg-gray-100 border-gray-300'
                    : 'bg-white border-gray-200 shadow-sm'
                }`}
              > 
                <span
                  onClick={()=>dispatch(toggleTodo(todo.id))}
                  className={`flex-1 cursor-pointer select-none transition-all duration-200 ${
                    todo.completed
                      ? 'line-through text-gray-500'
                      : 'text-gray-800 hover:text-gray-600'
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 text-sm font-medium"
                  onClick={()=> dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {todoo.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-gray-800">{todoo.length}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Total</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-green-600">{todoo.filter(t => t.completed).length}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-orange-500">{todoo.filter(t => !t.completed).length}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Pending</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;