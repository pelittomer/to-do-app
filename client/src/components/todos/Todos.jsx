import React from 'react'
import Todo from '../todo/Todo'
import styles from "./todos.module.css"
function Todos({ todos }) {
    return (
        <div className={styles.container}>
            <div className={styles.titles}>
                <h3>#</h3>
                <h3>Task Name</h3>
                <h3>Status</h3>
                <h3>Edit</h3>
                <h3>Remove</h3>
            </div>
            {
                todos.map((todo, index) => {
                    return (
                        <Todo todo={todo} index={index} key={todo._id} />
                    )
                })
            }
        </div>
    )
}

export default Todos