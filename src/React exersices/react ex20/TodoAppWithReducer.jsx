import { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export const TodoAppWithReducer = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    if (todo.trim()) {
      const newTodo = {
        id: crypto.randomUUID(),
        todo,
        completed: false,
      };
      dispatch({ type: "Add", payload: newTodo });
      setTodo("");
    }
  };

  return (
   
    <div className="min-h-screen bg-[#f0effc] flex items-center justify-center p-4 font-sans">
      
      
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-sm border border-gray-100">
        
       
        <h1 className="text-3xl font-bold text-center text-[#1e1e24] mb-6">
          My Todo List
        </h1>
        
       
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#8b3dff] transition-colors text-gray-700 placeholder-gray-400"
          />
          <button 
            onClick={handleAdd}
            className="bg-[#8b3dff] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#742ee6] transition-colors shadow-sm"
          >
            Add
          </button>
        </div>
        
       
        <div className="space-y-3">
          {state.length === 0 ? (
            <p className="text-gray-400 text-center py-4">No todos yet. Add one!</p>
          ) : (
            <ul>
              {state.map((todo) => (
                <li 
                  key={todo.id} 
                  className="flex items-center justify-between bg-[#f8f9fa] hover:bg-gray-50 p-4 rounded-xl mb-3 transition-colors group"
                >
                 
                  <div className="flex items-center gap-3 flex-1">
                    <input 
                      type="checkbox" 
                      checked={todo.completed}
                      onChange={() => dispatch({ type: "toggle", payload: todo.id })}
                      className="w-5 h-5 rounded border-gray-300 text-[#8b3dff] focus:ring-[#8b3dff] cursor-pointer"
                    />
                    <span 
                      className={`text-lg font-medium transition-all ${
                        todo.completed 
                          ? "line-through text-gray-400 font-normal" 
                          : "text-gray-700"
                      }`}
                    >
                      {todo.todo}
                    </span>
                  </div>

                  {/* Midig: Badanka Delete-ka (wuxuu soo baxaa markaad dul istaagto ama marka la doorto) */}
                  <button
                    onClick={() => dispatch({ type: "delete", payload: todo.id })}
                    className="text-[#e63946] font-semibold hover:text-red-700 px-2 py-1 rounded transition-colors"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};