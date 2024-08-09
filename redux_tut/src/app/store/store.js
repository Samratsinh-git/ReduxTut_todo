import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "../features/todo/slice";



export const store = configureStore({
    reducer: {
        toDo: toDoReducer
    }
});