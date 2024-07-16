import React from 'react'

const todo = (todo) => {
    return (
        <div><div className='todo'>
            <div className='content'>
                <p>{todo.text}</p>
                <p className='category'>
                    ({todo.category})
                </p>
            </div>
            <div className='buttons'>
                <button>Completar</button>
                <button>X</button>
            </div>
        </div></div>
    )
}

export default todo