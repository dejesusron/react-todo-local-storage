import { useContext } from "react";
import { TodoContext } from "../../context/todo-context/TodoContext";
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({ ...item }) => {
    const { todos, setTodos } = useContext(TodoContext);

    const completeTodo = (e) => {
        const filterTodos = todos.map((item) => {
            if (item.id === e.target.value) {
                item.completed = false;

                if (e.target.checked) {
                    item.completed = true;
                }
            }

            return item;
        });

        setTodos(filterTodos);
    }

    const deleteTodo = (e) => {
        e.preventDefault();

        const filteredTodo = todos.filter((item) => {
            return item.id !== e.target.id;
        });

        setTodos(filteredTodo);
    }

    const isCompleted = item.completed ? "checked" : "";
 
    return (
        <div>
            <div className="grid grid-cols-9 items-center gap-x-6 px-2">
                <input 
                    className="col-span-1 h-[20px] w-[20px]"
                    type="checkbox" 
                    id={ item.id } 
                    value={ item.id } 
                    onChange={(e) => completeTodo(e)}
                    checked={isCompleted}
                />
                <label className={`${item.completed ? "line-through" : ""} text-start col-span-6 text-xl`}>{ item.title }</label>
                <button 
                    id={ item.id } 
                    className="border border-[#333] bg-[#333] text-[#fff] p-2 col-span-2 text-sm flex items-center justify-center gap-x-2 hover:opacity-70 transition"
                    onClick={(e) => deleteTodo(e)}
                ><FaTrashAlt /></button>
            </div>
        </div>
    );
};

export default Todo;