import React from 'react'; 
import ReactDom from 'react-dom'
import Card from './Card';
import Button from './Button';
import classes from "./ErrorModal.module.css"

const Backdrop =props=>{
    return  <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverLay=props=>{
  return(
  <Card className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.context}>
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
       <Button onClick={props.onConfirm}>Okay</Button>  
    </footer>
</Card>
)
}


const ErrorModal=(props) =>{

    return (
        <React.Fragment>
         {ReactDom.createPortal(<Backdrop onclick={props.onConfirm}/>,document.getElementById('backdrop-root'))}
         {ReactDom.createPortal(<ModalOverLay title={props.title} message={props.message}  onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}


export default ErrorModal