import React, { useState } from 'react'
import styles from "./todo.module.css"
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiOutlineEdit, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import axios from 'axios'
import UpdateTodo from '../updateTodo/UpdateTodo'

function Todo({ todo, index }) {
    const [active, setActive] = useState(false)
    const [newTodo, setNewTodo] = useState("")
    const { _id, text, complete } = todo
    const deleteTask = (params) => {
        axios.delete(`http://localhost:3001/todos/delete/${params}`)
            .then((callback) => {
                console.log("İşlem başarılı", callback)
                window.location.reload();
            })
    }
    const changeStatus = (params) => {
        axios.post(`http://localhost:3001/todos/complete/${params}`)
            .then((callback) => {
                console.log('İşlem başarılı!', callback)
                window.location.reload();
            })
            .catch((error) => {
                console.log("İşlem Başarısız!", error)
            })
    }
    return (
        <div key={_id} className={styles.container}>
            <div className={styles.content}>
                <p style={{ fontSize: 20 }}>{index + 1}</p>
                <p style={{ fontSize: 20 }}>{text}</p>
                <p className={styles.btn} onClick={() => changeStatus(_id)}>{complete ? <AiOutlineCheckCircle size={25} color='green' /> : <AiOutlineCloseCircle size={25} color='red' />}</p>
                <p className={styles.btn} onClick={() => setActive(!active)}><span><AiOutlineEdit size={25} color={active && "red"} /></span></p>
                <p className={styles.btn} onClick={() => deleteTask(_id)}><span><RiDeleteBin6Line size={25} /></span></p>
            </div>
            {
                active &&
                <UpdateTodo id={_id} newTodo={newTodo} setNewTodo={setNewTodo} text={text} />
            }
        </div>
    )
}

export default Todo