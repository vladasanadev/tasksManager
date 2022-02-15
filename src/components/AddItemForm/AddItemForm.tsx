import React, {useState} from 'react';
import styles from "../TodoList/todoList.module.css";
import PropTypes from "prop-types";
import {randomUUID} from "crypto";
import { Button, TextField } from '@material-ui/core';
type PropTypes = {

    addTasks: ( title:string) => void

}

const AddItemForm = ({addTasks}:PropTypes) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);
    const addHandler =() => {
        {
            if (title !== "")
            {addTasks(title);
                setTitle('')}
            else setError(true)

        }
    }

    return (

            <div className={styles.inputWrapper}>
                <TextField
                    error={error}
                    size="small" id="outlined-basic"
                    label={error ? "Text is required" :  "Add text"}
                    variant="outlined"
                           value={title}
                           onChange={(e)=> { setTitle(e.target.value); }}
                           onClick={()=> {setError(false)}}
                           className={error ? 'styles.error': ""}
                />


                {/*<button onClick={addHandler}>+</button>*/}
                <Button variant="outlined" style={{maxWidth:"40px", maxHeight:"40px", minWidth:"40px", minHeight:"40px"}} onClick={addHandler}>
                    +
                </Button>
                {/*{error && <p>Text is required</p>}*/}
            </div>
    );
};

export default AddItemForm;