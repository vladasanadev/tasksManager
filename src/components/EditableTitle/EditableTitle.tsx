import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EditableTitlePropType = {
    title: string
    changeTitle?: (title: string) => void

}
const EditableTitle = ({title, changeTitle}: EditableTitlePropType) => {
    const [editable, setEditable] = useState(false);
    const [inputTitle, setInputTitle] = useState(title);

    const editableHandler = () => {
        setEditable(true);
    }
    const inputBlurHandle = (title: any) => {
        if (changeTitle) {
            changeTitle(title)
        }
        setEditable(false);
    }
    const onChangeHandler = (e: any) => {
        setInputTitle(e.target.value)
    }

    return (
        editable
            ?      <TextField size="small" id="outlined-basic" label="Outlined" variant="outlined" autoFocus
                              value={inputTitle}
                              onBlur={(e) => inputBlurHandle(e.target.value)}
                              onChange={(e)=> onChangeHandler(e)} />

            // <input
            //
            // />
            : <span style={{padding: "8px",
                textTransform: "uppercase", color:"black"}} onClick={editableHandler}>{title}</span>

    )
}
export default EditableTitle