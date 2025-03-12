import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div onClick={()=>toggle(id)} className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-7' />
            <p className={`tex-slte-700 ml-4 text-[17px] text-decoration-500 ${isComplete ? 'line-through' : ''} `}>{text}</p>
        </div>
        <img src={delete_icon} alt="" className='w-3.5 cursor-pointer' onClick={()=>deleteTodo(id)} />
    </div>
  )
}

export default TodoItems