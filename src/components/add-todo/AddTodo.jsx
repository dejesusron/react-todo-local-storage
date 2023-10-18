import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../../context/todo-context/TodoContext";
import { FaRegSquarePlus } from 'react-icons/fa6';

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const {todos, setTodos} = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" || title === undefined) {
            alert("Field can not be blank");
            return;
        }

        const newTodos = [ ...todos, {id: uuidv4(), title: title, completed: false }];
        setTodos(newTodos);
        setTitle("");
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  return (
    <div className="w-full">
        <form className="w-full grid grid-cols-10 gap-x-2" onSubmit={handleSubmit}>
            <input 
                className="border border-[#333] p-2 w-full col-span-7" 
                type="text" 
                placeholder="Add todo"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <button 
                className="border border-[#333] bg-[#333] text-[#fff] col-span-3 text-sm p-2 flex items-center justify-center gap-x-2 hover:opacity-70 transition" 
                type="submit"
            ><FaRegSquarePlus /> Add</button>
        </form>
    </div>
  );
}

export default AddTodo;