import React from 'react'
import { Todo } from "./Todo";

export const Todos = (props) => {
    let bodyStyle={
        minHeight: "70vh"
    }
    return (
        <div className="container" style={bodyStyle}>
            <h2 className="text-center m-4">My Today's list</h2>
            {props.todoItem.length===0? <div className="alert alert-info" role="alert"> Well done all work Completed!!</div> :
            props.todoItem.map((todos) => {
                return <Todo todos={todos} key={todos.sno} onDelete={props.onDelete}/>
            })}
            
        </div>
    )
}