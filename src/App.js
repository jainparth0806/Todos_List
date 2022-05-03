import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  const getLocalTodo = () => {
    let list = localStorage.getItem("abhay");
    // console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem("abhay"));
    } else {
      return [];
    }
  };

  const onDelete = (todos) => {
    //  console.log("i am onDelete of todos",todos);
    setTodoItem(
      todoItem.filter((e) => {
        return e !== todos;
      })
    );
  };
  const addTodo = (subject, description) => {
    // console.log("I am working!!");
    let sno;
    // console.log(todoItem[todoItem.length-1].sno);
    todoItem.length === 0
      ? (sno = 1)
      : (sno = todoItem[todoItem.length - 1].sno + 1);
    // console.log(sno);
    const myTodo = {
      sno: sno,
      subject: subject,
      description: description,
    };
    // console.log(myTodo);
    setTodoItem([...todoItem, myTodo]);
  };
  const [todoItem, setTodoItem] = useState(getLocalTodo());
  useEffect(() => {
    localStorage.setItem("abhay", JSON.stringify(todoItem));
  }, [todoItem]);
  return (
    <>
      <Header title="My ToDo's List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todoItem={todoItem} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
