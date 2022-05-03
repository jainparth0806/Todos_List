import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!subject || !description)
            alert("Subject or Description is empty");
        else {
            props.addTodo(subject, description);
            setSubject("");
            setDescription("");
        }
    }
    return (
        <div className="m-5">
            <h3 className="text-center">Add things in the list</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" aria-describedby="emailHelp" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={description} className="form-control" id="description" onChange={(e) => { setDescription(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
