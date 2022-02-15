import React from 'react';
import styles from './todoList.module.css'
import AddItemForm from "../AddItemForm/AddItemForm";
import EditableTitle from "../EditableTitle/EditableTitle";
import {Button, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

export type TaskType = {
    id: string,
    isDone: boolean,
    title: string
}
type PropTypes = {
    name: string,
    listId: string,
    tasks: any,
    removeTask: Function,
    filter: string,
    filterTasks: Function,
    checkTasks: (listId: string, id: string) => void
    addTasks: (listId: string, title: string) => void
    changeTitle: (listId:string, id: string, title: string) => void
    changeListTitle: (listId:string, title: string) => void


}

const TodoList = ({
                      tasks,
                      addTasks,
                      listId,
                      name,
                      filter,
                      removeTask,
                      checkTasks,
                      filterTasks,
                      changeTitle,
                      changeListTitle
                  }: PropTypes) => {

    const mychangeListTitle = (name:string) => {
        changeListTitle(listId,name)
    }

    const tasksArr = tasks.map((task: { isDone: boolean | undefined; id: string; title: string; }) => {
        const mychangeTitle = ( title:string) => {
            changeTitle(listId, task.id,title)
        }

        return (
            <li><input type="checkbox" checked={task.isDone} onClick={(e) => {
                checkTasks(listId, task.id)
            }}/><EditableTitle changeTitle={mychangeTitle} title={task.title}/>

                <IconButton aria-label="delete"  onClick={() => {
                    {
                        removeTask(task.id, listId)
                    }
                }}>
                    <Delete />
                </IconButton>


            </li>

        )
    })

    const addTaskToDoList = (title: string) => {
        console.log(listId, title)
        addTasks(listId, title)
    }

    return (
        <div>
            <div>
            <EditableTitle title={name} changeTitle={mychangeListTitle}/>
            <AddItemForm addTasks={addTaskToDoList}/>
            </div>
            <div className={styles.btnWrapper}>
                <Button variant={filter === 'all' ? "outlined" : "contained"} size="small" color="primary" onClick={() => {
                    filterTasks('all', listId)
                }} >ALL</Button>
                <Button variant={filter === 'completed' ? "outlined" : "contained"}  color="primary" size="small"  onClick={() => {
                    filterTasks('completed', listId)
                }} >DONE</Button>
                <Button variant={filter === 'active' ? "outlined" : "contained"} color="primary" size="small" className={filter === 'active' ? styles.activeBtn : ""} onClick={() => {
                    filterTasks('active', listId)
                }}>ACTIVE</Button>

            </div>
            <ul>
                {tasksArr}

            </ul>

        </div>
    );
};

export default TodoList;