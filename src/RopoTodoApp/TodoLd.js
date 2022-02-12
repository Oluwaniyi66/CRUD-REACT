import React, { useEffect, useState } from 'react';
import todos from './Info';

function TodoLd() {

    const [payload, setPayload] = useState(localStorage.getItem('ldtodo') ? JSON.parse(localStorage.getItem('ldtodo')) : todos);
    const [showForm, setshowForm] = useState(false)
    const [change, setChange] = useState(false)
    const [button, setButton] = useState('submit')
    const [viewMore, setViewMore] = useState({})




    const [myTodo, setMyTodo] = useState(
        {
            id: payload.length + 1,
            title: '',
            description: '',
            completed: false

        }
    );

    const displayForm = () => {
        setshowForm(!showForm)

    }

    const handleChange = (e) => {

        setMyTodo({ ...myTodo, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(myTodo)
        setMyTodo(myTodo);

        if (button == 'Update') {

            let id = myTodo.id;
            payload.splice(id, 1, myTodo)
            localStorage.setItem('ldtodo', JSON.stringify(payload))
            setMyTodo({})

            console.log(payload);
            setshowForm(false)

        }
        else {

            const updatedTodo = myTodo
            setPayload([...payload, updatedTodo])
            const updatedPayload = [...payload, updatedTodo]
            localStorage.setItem('ldtodo', JSON.stringify(updatedPayload))
            setMyTodo({})
            console.log(updatedPayload);
            setshowForm(false)
        }
    }

    const saveData = () => {
        localStorage.setItem("ldtodo", JSON.stringify(payload))
    }


    const handleEdit = (id) => {

        setshowForm(true)
        setButton('Update')

        let editedTod = { ...payload[id], "id": id, "completed": false }
        setMyTodo(editedTod)


    }

    const handleDelete = (id) => {

        payload.splice(id, 1)
        localStorage.setItem("ldtodo", JSON.stringify(payload))
        setChange(!change)
    }

    const TaskCompleted = (id) => {
        payload.map((e, i) => {
            if (id === i) {
                e.completed = e.completed == false ? true : false
            }
        })
        setChange(!change)

    }
    const handleViewmore = (id) => {
        alert(id)
        setshowForm(true)
        setViewMore(payload[id])
        setMyTodo(payload[id])


    }

    useEffect(() => {


    }, [change]);



    return <div className='container'>

        {
            showForm ?
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' value={myTodo.title} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" className="form-control" name='description' value={myTodo.description} onChange={handleChange} id="exampleInputPassword1" />
                    </div>
                    <button type='submit' >{button}</button>

                </form> : ''
        }
        <button type="button" onClick={displayForm} className="btn btn-primary mt-4">{showForm ? 'Hide form' : 'add Todo'}</button>

        {
            showForm ? '' :
                <table className='table mt-5'>
                    <thead>
                        <th> Delete Icon</th>
                        <th>S/N</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status </th>
                        <th>Action</th>
                        <th>Action </th>
                    </thead>
                    <tbody>

                        {

                            payload.map((item, index) => (

                                <tr>

                                    <td> <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button></td>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.completed ?  "completed" : "Not completed"}</td>
                                    <td>{item.completed ? <button className='btn btn-primary'>Great Job</button> :
                                        <button className='btn btn-secondary' onClick={() => TaskCompleted(index)}>Done</button>}</td>
                                    <td> <button className='btn btn-secondary  me-1' onClick={() => handleEdit(index)}>Edit</button>
                                        <button className='btn btn-secondary' onClick={() => handleViewmore(index)}>View More</button>  </td>
                                </tr>

                            )

                            )
                        }
                    </tbody>
                </table>
        }
    </div>;
}

export default TodoLd;
