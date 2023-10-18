import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    const [todos, setTodos] = useState(getTodos ? getTodos :[]);
    
    const values = {
        todos, setTodos,
    };

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
};