import React from 'react';
import Card from "../UI/Card.js"
import classes from "./AddUser.module.css";
import Button from '../UI/Button.js';
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal.js"
const AddUser=(props)=>{
    const nameInputRef= useRef();
    const ageInputRef=useRef();

    const [error,setError] = useState();
    const SubmitHandler=(event)=>{
        event.preventDefault();
        const enteredName =nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if(enteredName.trim().length===0||enteredAge.trim().length===0){
           setError({
            title:'Invalid input',
            message:'please enter a valid name and age'
           });
            return;
        }
        if(+enteredAge<1){
            setError({
                title:'Invalid age',
                message:'please enter a valid name and age'
               });
            return;
        }
        console.log(enteredName,enteredAge);
        props.onAddUser(enteredName,enteredAge)
        nameInputRef.current.value='';
        ageInputRef.current.value='  ';
     } 
   
     const errorHandler=()=>{
        setError(null);
     }
    return(<div >
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={SubmitHandler}>
            <label htmlFor="username">User Name</label>
            <input 
            id="username" 
            type="text" 
             ref={nameInputRef}/>
            <label htmlFor='age'>Age (Years)</label>
            <input 
            id="age"
             type="number" 
             ref={ageInputRef}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
       </div> 
    )
}

export default AddUser;