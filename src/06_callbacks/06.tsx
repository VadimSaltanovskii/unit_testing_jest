import React from 'react'

export function User () {

    const deleteUser = () => {
        alert('User deleted')
    }

    const reactEvent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(event);
        console.log(event.currentTarget);
    }

    const saveUser = () => {
        alert('User saved')
    }

    const onChangeArea = () => {
        alert('TRATOR')
    }

    return (
        <div>
            <textarea name="area" value='Hello' onChange={onChangeArea}></textarea> 
            <button onClick={deleteUser}>Delete</button>
            <button onDoubleClick={saveUser}>Save</button>
            <button onClick={reactEvent}>Event</button>
        </div>
    )
} 