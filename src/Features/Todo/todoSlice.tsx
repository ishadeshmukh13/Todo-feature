import { createSlice } from "@reduxjs/toolkit";

export interface TodoPayload {
    id: string;
    title: string;
    description: string;
}

interface AddTodoAction {
    type: string;
    payload: TodoPayload;
}
interface RemoveTodo {
    type: string;
    payload: string;
}
interface TodoState {
    todoData: TodoPayload[];
}
const initialState={
    todoData:[]
}
export const todoSlice=createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo:(state:TodoState,action:AddTodoAction)=>{
            state.todoData.unshift(action.payload);
            console.log(state.todoData,action.payload,"hello data added ")

        },
        removeTodo:(state:TodoState,action:RemoveTodo)=>{
          state.todoData=  state.todoData.filter((item:TodoPayload)=>{
               return item.id!==action.payload;
            });
        },
        updateTodo:(state:TodoState,action:AddTodoAction)=>{
            const indexToUpdate = state.todoData.findIndex((item: TodoPayload) => item.id === action.payload.id);
            if (indexToUpdate !== -1) {
                state.todoData[indexToUpdate] = action.payload;
            }

        },

    }
})
export const {
    addTodo,
    removeTodo,
    updateTodo
    
}=todoSlice.actions;
export default  todoSlice.reducer;