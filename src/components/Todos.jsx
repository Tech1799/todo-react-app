import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="max-w-screen-md ml-10">
      <div className="text-3xl font-black mt-8 text-indigo-600">
        Todos List
      </div>
      {props.todos.length === 0 ? 
      <div className=" text-slate-600 my-6 py-4 text-center">
        <div className="font-bold text-2xl text-rose-600">
          <span className="inline-block">
            <ExclamationCircleIcon className="h-6 w-6 mr-2" />
          </span>
          Todo List is empty!
        </div>
      </div> : 
      props.todos.map((todo, idx) => {
        return <TodoItem key={idx} todo={todo} onDelete={props.onDelete}/>;
      })
      }
    </div>
  );
};
