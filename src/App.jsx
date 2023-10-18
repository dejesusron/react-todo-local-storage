import AddTodo from "./components/add-todo/AddTodo";
import TodoList from "./components/todo-list/TodoList";
import { TodoContextProvider } from "./context/todo-context/TodoContext";
 
const App = () => {
  return (
    <TodoContextProvider>
      <div className="w-screen h-screen grid place-items-center">
        <div className="border border-[#333] w-[90%] h-[500px] md:h-[600px] md:w-[500px] p-4 md:p-6 flex flex-col gap-y-4">
          <h1 className="text-center font-semibold text-3xl">Todo List App</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App