import React from 'react';
import {TaskType} from "../components/TodoList/TodoList";

export const TaskReducer = (state: Array<TaskType>, action: GeneralType ) => {
    switch (action.type) {
        case "REMOVE_TASK": {
            return state
            // ...state,
            //     ...action.payload.id
        }
        case "ADD_TASK": {
            return state
        }
        default: return state

    }
};

type GeneralType = RemoveTAskActionCreaterType  //combined different types of ActionCreaters
    | addTaskActionCreater

type RemoveTAskActionCreaterType = ReturnType<typeof removeTaskActionCreator> //super typysation //returns
type addTaskActionCreater = ReturnType<typeof addTaskActionCreater>
export const removeTaskActionCreator = (id: string, listId: string) => {
    return{
        type: "REMOVE_TASK",
        id:id,
        listId:listId
    } as const
}
export const addTaskActionCreater = (id: string, title: string) => {
    return{
        type: "ADD_TASK",
        id:id,
        title:title
    } as const
}

