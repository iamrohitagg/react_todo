import React from 'react'

export default class FilterTodo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
            {this.props.filterButtons.map(filterButton => {
                return <button onClick = {() =>{
                    this.props.filterTodos(filterButton)
                }}>{filterButton}</button>
            })}
            </>
        )
    }
}