import React from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // passing todo list as objects in an array called todos (Array of objects )
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],

    // function to add todos 
    addTodo: (todo) => { },


    // function to update the todo 
    updateTodo: (id, todo) => { },

    // delete todo 
    deleteTodo: (id) => { },

    // completing task 
    toggleComplete: (id) => { }

})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider