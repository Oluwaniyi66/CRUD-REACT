import React, { useState } from 'react'
import todos from './Data'
import './TodoList.css'

function TodoList() {

    // const [todo, setTodo] = useState(localStorage.getItem('todos')? JSON.parse (localStorage.getItem('todos')):todos)
    // const [todo, setTodo] = useState(localStorage.getItem('todos')? JSON.parse (localStorage.getItem('todos')):todos)

    // localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('name', 'robo');

    return (
        <div>

            <ul>
                {
                  todos.length>0? (

                    
                      todos.map((item) =>
                        (
                            <div className='toda'>
    
                                <li>{item.title}</li>
                                <li>{item.description}</li>
                                <li>{item.tag}</li>
                                <li>{item.completed}</li>
                            </div>
                        ))
                  )
                        :
                  
                  
                    
                    (
                        <div>

                            <p>
                                add a todo because the array is empty
                            </p>
                                <button className='btn btn-primary'>add a todo </button>
                        </div>
                    )

                    
                }


            </ul>

        </div>
    )
}

export default TodoList
