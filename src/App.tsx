import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList/TodoList";
//@ts-ignore
import * as uuid from "uuid"
import {v4} from "uuid";
import Select from "./components/Select/Select";
import SmartCounter from "./components/SmartCounter/SmartCounter";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import Header from "./components/Header/Header";
import {Container, Grid, Paper} from "@material-ui/core";
import EditableTitle from "./components/EditableTitle/EditableTitle";
import {TaskReducer} from "./reducer/TaskReducer";

export type filterValueType = "all" | "active" | 'completed'

type doListType = {
    id: string;
    title: string;
    filter: filterValueType;

}


function App() {
    let toDoListIdD1 = uuid.v4();
    let toDoListIdD2 = uuid.v4();


    let tasks = {
        [toDoListIdD1]: [
            {id: uuid.v4(), title: "CSS", isDone: true},
            {id: uuid.v4(), title: "HTML", isDone: true},
            {id: uuid.v4(), title: "JS", isDone: false},
            {id: uuid.v4(), title: window.innerHeight.toString(), isDone: false}
        ],
        [toDoListIdD2]: [
            {id: uuid.v4(), title: "CSS", isDone: true},
            {id: uuid.v4(), title: "HTML", isDone: true},
            {id: uuid.v4(), title: "JS", isDone: false},
            {id: uuid.v4(), title: window.innerHeight.toString(), isDone: false}
        ]
    }
    const doList = [
        {id: toDoListIdD1, title: "What to learn", filter: 'all'},
        {id: toDoListIdD2, title: "What to buy", filter: 'all'},
    ]

    const [mytasks, dispatchTasks] = useState(tasks);
    const [toDoList, setToDoList] = useState(doList);

    const removeTask = (id: string, listId: string) => {
        dispatchTasks({...mytasks, [listId]: mytasks[listId].filter(el => id !== el.id)})
    }

    const addTasks = (id: string, title: string) => {
        const newtask = {id: v4(), title: title, isDone: false}
        // @ts-ignore

        dispatchTasks({...mytasks, [id]: [newtask, ...mytasks[id]]})
    }


    let filteredtasks = mytasks;

    const filterTasks = (status: string, listId: string) => {

        setToDoList(toDoList.map(m => (listId === m.id) ? {...m, filter: status} : m));


    }

    const checkTasks = (listId: string, id: string) => {
        // @ts-ignore

        let task = mytasks[listId].find(el => el.id === id)
        if (task) {
            task.isDone = !task.isDone
        }
        // @ts-ignore
        dispatchTasks({...mytasks});
        console.log(mytasks, mytasks[listId][0].isDone)


    }
    const changeTitle = (listId: string, id: string, title: string) => {
        let task = mytasks[listId].find(task => task.id === id)
        if (task) {
            task.title = title
        }
        console.log(mytasks, task)
        dispatchTasks({...mytasks});
    }
    const changeListTitle = (listId: string, title: string) => {
        let list = toDoList.find(list => list.id === listId)
        if (list) {
            list.title = title
        }
        dispatchTasks({...mytasks});
    }

    const addList = (title: string) => {
        const id = uuid.v4()
        const newList = {id: id, title: title, filter: 'all'}
        // @ts-ignore

        setToDoList([newList, ...toDoList])
        dispatchTasks({...mytasks, [id]: []})
        console.log(toDoList, [newList, ...toDoList])

    }


    return (
        <div className="App">
            <Header/>
            <Container fixed>
                <div style={{padding: "10px", justifyContent:"center", alignItems:"center"}}>
                <EditableTitle title={"New List"}/>
                    <AddItemForm addTasks={addList}/>
                </div>
                <Grid container>
                    {toDoList.map(list => {

                            let taskAftFilter = mytasks[list.id]
                            if (list.filter === 'active') {
                                taskAftFilter = mytasks[list.id].filter(el => el.isDone === false)

                            } else if (list.filter === 'completed') {

                                taskAftFilter = mytasks[list.id].filter(el => el.isDone === true)
                            }

                            return (
                                <div>
                                    <Paper style={{padding: "10px", marginRight:"10px"}}>
                                        <TodoList
                                            listId={list.id}
                                            name={list.title}
                                            tasks={taskAftFilter}
                                            removeTask={removeTask}
                                            filterTasks={filterTasks}
                                            filter={list.filter}
                                            checkTasks={checkTasks}
                                            addTasks={addTasks}
                                            changeTitle={changeTitle}
                                            changeListTitle={changeListTitle}

                                        />
                                    </Paper>
                                </div>
                            )

                        })
                    }
                </Grid>

            </Container>
        </div>
    )
}

export default App;
