import React from 'react'

export const Todo = ({todos,onDelete}) => {
    return (
        <div>
            <h4>{todos.sno + " " + todos.subject}</h4>
            <p>{todos.description}</p>
            <button type="button" className="btn btn-sm btn-info" onClick={()=>{onDelete(todos)}}>Done!</button>
            <p className="m-5"></p>
        </div>
    )
}
