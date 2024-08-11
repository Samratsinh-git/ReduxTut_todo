// import Image from "next/image";
"use client";
import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div>Todo List</div>
      <AddTodo/>
      <Todos/>
    </Provider>
  );
}
