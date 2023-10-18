import Todo from "../todo/Todo";
import { useContext } from "react";
import { TodoContext } from "../../context/todo-context/TodoContext";

const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);

    const todo = todos.map((item) => {
        return (
            <Todo key={item.id} {...item} />
        );
    });

    return (
        <div className="flex flex-col gap-y-2 overflow-y-scroll">
            {
                todos.length >= 1 ? todo : <p>No todo found. Please add!</p>
            }
        </div>
    );
};

export default TodoList;