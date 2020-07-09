import React from 'react'
import './mystyle.css'

export default class FilterTodo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
            {this.props.filterButtons.map(filterButton => {
                return <button id = "mybuttons" onClick = {() =>{
                    this.props.filterTodos(filterButton)
                }}>{filterButton}</button>
            })}
            </>
        )
    }
}