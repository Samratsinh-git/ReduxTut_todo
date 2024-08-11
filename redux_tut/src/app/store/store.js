import { configureStore } from "@reduxjs/toolkit";
import toDoReducer  from "../features/todo/slice";
// import { toDoSlice } from "../features/todo/slice";


export const store = configureStore({
    // reducer: {
    //     toDo: toDoReducer
    // }
    // If you do this above one: then you will have to access the todo list or their initial state in 2 levels viz state.toDo.todos so we'll have below one:

    reducer: toDoReducer
});