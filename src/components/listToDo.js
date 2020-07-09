import React from 'react'
import "./mystyle.css"
export default class ListTodo extends React.Component{
    constructor() {
        super()
    }
    render() {
        let {items} = this.props
        return (
            <>
            <ul className = "mylist">
                {items.map((item) =>
                    <li>
                        <span className = "myspan"
                        onClick = {() =>{
                            this.props.updateTodo(item)
                        }}
                        style = {{
                            textDecoration : !item.active ? "line-through" : "none"}}
                        >
                            {item.title}</span>
                        <button  onClick = {() =>{
                            this.props.deleteTodo(item)
                        }}
                        >Delete</button>
                        </li>
                )}
            </ul>
            </>
        )
    }
}