import React, { useEffect, useState } from 'react';
import todos from './Data'



function TodoNew() {

    const [payload, setPayload] = useState(localStorage.getItem('ropotodo') ? JSON.parse(localStorage.getItem('ropotodo')) : todos);

    const [watch, setWatch] = useState(false);
    const [Change, setChange] = useState(false)
    const [button, setButton] = useState('submit')
    const [viewMore, setViewMore] = useState({})

    const saveData = () => {
        localStorage.setItem('ropotodo', JSON.stringify(payload))
    }

    const [SingleTodo, setSingleTodo] = useState({

        title: '',
        description: '',
        completed: false
    });
    const handleChange = (e) => {

        setSingleTodo({ ...SingleTodo, [e.target.name]: e.target.value })
    }
    const handleSave = () => {

        if (button == 'Update') {

            let id = SingleTodo.id;
            payload.splice(id,1,SingleTodo)
            localStorage.setItem('ropotodo', JSON.stringify(payload))
            setSingleTodo({})
            setChange(!Change)
            setWatch(false)

        } else {

            const UpdatedSingle = SingleTodo
            setPayload([...payload, UpdatedSingle])


            const updatedPayload = [...payload, UpdatedSingle]
            localStorage.setItem('ropotodo', JSON.stringify(updatedPayload))
            setSingleTodo({})
            setWatch(false)
        }

    }
    const handleDelete = (index) => {

        let updatedPayload = payload

        updatedPayload.splice(index, 1)
            
        setPayload(updatedPayload)
        localStorage.setItem('ropotodo', JSON.stringify(updatedPayload))
        setChange(!Change)

    }
    const handleEdit = (id) => {

        setButton('Update')

        let editedTod = { ...payload[id], "id": id, "completed": false }
        setSingleTodo(editedTod)
        setWatch(true)

    }
        
    const handleViewmore = (id) => {

        setViewMore(payload[id])
        setWatch("b")

        
    }

    const AddTodo = () => {
        setWatch(true)
    }

    const TaskCompleted = (id) => {

        payload.map((e, i) => {
            if (id === i) {
                e.completed = e.completed == false ? true : false
            }
        })
        
        setChange(!Change)
    }
    const Discard = () => {
        setWatch(false)
    }
    const back = () => {

        setWatch(false)
        setViewMore({})
        
    }

    useEffect(() => {
        saveData()

    }, [Change]);


    // console.log(todos)
    return <div className='container'>
        <button onClick={AddTodo} className='btn btn-primary offset-10 mt-5'>Add Todo</button>

        {
            watch === false ? (
                <table className='table mt-5'>

                    <thead>
                        <th>Delete icon</th>
                        <th>S/N</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Action</th>

                    </thead>

                    <tbody>
                        {
                            payload.map((item, index) => (

                                <tr>
                                    <td> <button onClick={() => handleDelete(index)} className='btn btn-danger'>Delete</button></td>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td> {item.completed ? "completed" : "Not completed"}</td>
                                    <td> {item.completed ? (<button className='btn btn-primary'>Great Job</button>) :
                                        (<button className='btn btn-secondary' onClick={() => TaskCompleted(index)}>Done</button>)} </td>
                                    <td> <button className='btn btn-secondary' onClick={() => handleEdit(index)}>Edit</button> <button onClick={() => handleViewmore(index)} className='btn btn-secondary'>ViewMore</button> </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            ) : ('')
        }
                       {
                           viewMore !== {} ? (
                               <div>
                                   
                            <h2>{viewMore.title}</h2>
                            <h2>{viewMore.description}</h2>
                            <h2>{viewMore.completed ? "completed" : "Not completed"}</h2>
                            <button onClick={back}>back</button>
                            </div>
                           ): ("")
                       }
        {
            watch === true ? (<div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" onChange={handleChange} name='title' value={SingleTodo.title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" onChange={handleChange} name='description' value={SingleTodo.description} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" onClick={handleSave} className="btn btn-primary">{button}</button>
                <button type="submit" onClick={Discard} className="btn btn-danger mx-3">Discard</button>
            </div>
            ) : ('')
        }

    </div>;
}

export default TodoNew;
