import axios from 'axios'
import React from 'react'
import styles from "./updateTodo.module.css"
function UpdateTodo({ id, newTodo, setNewTodo, text }) {
    const updateTodo = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3001/todos/update/${id}`, { newTodo })
            .then((callback) => {
                console.log("İşlem Başarılı!", callback)
                window.location.reload();
            }).catch((error) => {
                console.log("İşlem Başarısız!", error)
            })
    }
    return (
        <form className={styles.container} onSubmit={updateTodo}>
            <input type="text" placeholder={text} maxLength={25} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button type='submit' disabled={!newTodo}>Update</button>
        </form>
    )
}

export default UpdateTodo