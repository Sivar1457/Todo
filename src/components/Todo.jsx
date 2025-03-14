import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const [todoList , setTodoList] = useState(localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[]);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim() ;

        if ( inputText == "" ) {
            return null;
        }
        
        const newTodo = {
            id : todoList.length+1,
            text: inputText ,
            isComplete: false,
        }

        setTodoList((prev)=>[...prev,newTodo]);
        inputRef.current.value = '' ;
    }

    const deleteTodo = (id) => {
        setTodoList((prev) => {
            return prev.filter((todo) => todo.id != id)
        });
    }

    const toggle = (id) => {
        setTodoList((prev)=> {
            return prev.map((todo)=>{
                if(todo.id == id) {
                    todo.isComplete = !todo.isComplete ;
                }
                return todo;
            })
        })
        console.log(todoList);
    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList])


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        <div className="flex items-center mt-7 gap-2">
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text-3xl font-semibold'>ToDo List</h1>
        </div>
    
    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
        <button onClick={()=>add()} className='border-none rounded-full
        bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
    </div>

    <div>
        {todoList.map((todo) => {
                return <TodoItems text={todo.text} key={todo.id} id={todo.id}
                isComplete={todo.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
        })}
        {/* <TodoItems text={"Learn Coding"} />
        <TodoItems text={"Learn Coding from GreatStack"}/>
        <TodoItems text={'helloworld in programming language'}/> */}
    </div>

    </div>
  )
}

export default Todo