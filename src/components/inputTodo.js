import React from 'react'

export default class InputToDo extends React.Component{
    constructor(){
        super();
        this.inputRef = React.createRef()
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
            <input placeholder = "Todo" 
            ref = {this.inputRef}
            // onKeyPress = {this.enterpress.bind(this)}
            ></input>
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