import { Button, TextField } from '@mui/material'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import Todo from './Todo'
import { db } from "../firebase"

const TodoForm = () => {
 const [todo, setTodo] = useState({ title:'' })
 const onSubmit = async () => {
    const collectionRef = collection(db, "todos")
    const docRef = await addDoc(collectionRef, { ...todo, timestampp: serverTimestamp() })
    setTodo({ title: ''})
    alert(`Tarefa com id ${docRef.id} foi adicionada com sucesso`)
 }

  return (
    <div>
        //<pre>{JSON.stringify(todo)}</pre>
        <TextField fullWidth label="title" margin="normal"
            value={todo.title}
            onChange={e => setTodo({...todo,title:e.target.value})}
        />
        <Button onClick={onSubmit} variant="contained" sx={{ mt: 3 }}>Adicionar tarefa</Button>
        
    </div>
  )
}

export default TodoForm