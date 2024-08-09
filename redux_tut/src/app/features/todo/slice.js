import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id:1, text: 'HOla todo!'
  }],
};  

export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removetodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!=action.payload);
        }
    }
})

export const {addtodo, removetodo} = toDoSlice.actions;

export default toDoSlice.reducer;