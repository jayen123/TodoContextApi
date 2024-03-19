import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "Todo Msg",
            completed: false
        }
    ],
    addTodo : (todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    updateTodo: (id,todo) => {}
});

export const TodoProvider = TodoContext.Provider

export default function useTodo ()  {
    return useContext(TodoContext)
} 