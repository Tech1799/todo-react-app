import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

export const TodoItem = ({ todo, onDelete }) => {
  const todoStyles = {
    width: "450px"
  }
  return (
    <div>
      <div className="bg-lime-200 rounded-md my-4 p-4" style={todoStyles}>
        <div className="mr-8">
          <div className="text-2xl font-black text-slate-700">
            {todo.title}
          </div>
          <div className="font-semibold text-slate-600"> {todo.desc} </div>
        </div>
        <div>
          <button
            className="btn btn-circle btn-outline btn-secondary"
            onClick={() => onDelete(todo)}
          >
            <TrashIcon className="h-8 w-8 " />
          </button>
        </div>
      </div>
    </div>
  );
};
