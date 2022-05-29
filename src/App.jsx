import React, { useState, useEffect } from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { About } from "./components/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log(`I am onDelete of todo ${todo}`);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
  };

  const addTodo = (title, desc) => {
    console.log(
      `I am adding this todo with title: ${title} and description: ${desc}`
    );
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno,
      title,
      desc,
    };
    setTodos([...todos, myTodo]);
    set;
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App font-inter min-h-screen">
      <Router>
        <Header title="My Todo App" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="mx-10 flex justify-evenly">
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </div>
            }
          />
          <Route exact path="/about" element={ <About/> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
