import React from 'react'
import "./mystyle.css"
export default class InputToDo extends React.Component{
    constructor(){
        super();
        this.inputRef = React.createRef()
        this.placeholder = "What needs to be done"
    }
    
    render(){
        let {addTodo} = this.props;
        // enterpress(event){
        //     var key = event.keyCode
        //     if(key == 13){
        //         if(this.inputRef.current.value)
        //             addTodo(this.inputRef.current.value)
        //     }
        // }
        return(
            <>
            <input className = "taskinput" placeholder = {this.placeholder}
            ref = {this.inputRef}></input>
            <button 
            onClick = {() =>{
                if(this.inputRef.current.value)
                addTodo(this.inputRef.current.value)
            }}
            >
                Add Todo</button>
             </>
        )
    }
}