import React from 'react'
import "./mystyle.css"
export default class InputToDo extends React.Component{
    constructor(){
        super();
        this.inputRef = React.createRef()
        this.placeholder = "What needs to be done"
    }
    handlekeypress = (event) => {
        let {addTodo} = this.props;
        if(event.keyCode === 13){
            if(this.inputRef.current.value){
                addTodo(this.inputRef.current.value)
            }
        }
    }
    render(){
        
        
        return(
            <>
             <input className = "taskinput" placeholder = {this.placeholder}
            ref = {this.inputRef} onKeyDown = {this.handlekeypress} ></input>
             </>
        )
    }
}