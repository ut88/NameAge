import React from 'react';
import Card from "../UI/Card.js"
import classes from "./AddUser.module.css";
import Button from '../UI/Button.js';
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal.js"
const AddUser=(props)=>{
    const [enteredUsername,setEnterUserName]=useState('');
    const [enterAge,setEnterAge]=useState(''); 
    const [error,setError] = useState();
    const SubmitHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0||enterAge.trim().length===0){
           setError({
            title:'Invalid input',
            message:'please enter a valid name and age'
           });
            return;
        }
        if(+enterAge<1){
            setError({
                title:'Invalid age',
                message:'please enter a valid name and age'
               });
            return;
        }
        console.log(enteredUsername,enterAge);
        props.onAddUser(enteredUsername,enterAge)
        setEnterUserName('');setEnterAge(''); 
     } 
     const usernameChangeHandler = (event)=>{
        setEnterUserName(event.target.value)
     } 

     const ageChangeHandler = (event)=>{
        setEnterAge(event.target.value)
     } 
     const errorHandler=()=>{
        setError(null);
     }
    return(<div >
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={SubmitHandler}>
            <label htmlFor="username">User Name</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor='age'>Age (Years)</label>
            <input id="age" type="number" value={enterAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
       </div> 
    )
}

export default AddUser;