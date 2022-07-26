import { ListItem, ListItemText } from '@mui/material'
import moment from 'moment'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import { TodoContext } from "..pages/TodoContext"
import { useContext } from "react";

const Todo = ({ id, timestamp, title }) => {

  const { showAlert, setTodo } = useContext(TodoContext)

  const deleteTodo = async (id,e)=>{
    e.stopPropagation();
    const docRef = doc(db,"todos",id);
    await deleteDoc(docRef);
    showAlert('error', `Tarefa com id ${id} deletada com sucesso`)
  }
  return (
    <ListItem onClick={()=>setTodo({ id, title, timestamp })}
        sx={{ mt:3, boxShadow: 3 }}
        style={{backgroundColor:'#FAFAFA'}}
        secondaryAction={
            <>
            <IconButton onClick={ e=> deleteTodo(id, e)}>
                <DeleteIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </>
        }
    >
        <ListItemText
            primary={title}
            secondary={moment(timestamp).format("MMM do, yyyy")}
        />

    </ListItem>
  )
}

export default Todo
