import React from 'react'
import InputToDo from "./components/inputTodo"
import ListTodo from "./components/listToDo"
import FilterTodo from "./components/filterTodo"
import './styles.css'
export default class Todos extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : [{
                title : "Help Someone",
                active : 1
            }],
            allTodos : [],
        }
    }
    addTodo = (title)=>{
        let todo = {
            title,
            active : 1
        }
        let newTodosArray = [...this.state.todos, todo]
        this.setState({
            todos : newTodosArray,
            allTodos : newTodosArray
        })
    }

    
    updateTodo = (todo) =>{
        let todoObjectIndex = this.state.todos.indexOf(todo)
        let previousArray = [...this.state.todos]
        previousArray[todoObjectIndex].active = !previousArray[todoObjectIndex]
        .active;
        this.setState({
            todos : previousArray,
            allTodos : previousArray
        })
    }
    deleteTodo = (todo) =>{
        let todoObjectIndex = this.state.todos.indexOf(todo)
        let previousArray = [...this.state.todos]
        previousArray.splice(todoObjectIndex, 1);
        this.setState({
            todos : previousArray,
            allTodos : previousArray
        })
    }
    filterTodos = (filter) =>{
        switch(filter){
            case "Active":
                let activeTodos = this.state.allTodos.filter(todo => todo.active);
                this.setState({
                    todos : activeTodos
                })
                break;
            case "Completed":
                let completedTodos = this.state.allTodos.filter(todo => todo.active);
                this.setState({
                    todos : completedTodos
                })
                break; 
            default :
            this.setState({
                todos : [...this.state.allTodos]
            })
        }
    }
    render(){
        return(
            <>
            <h1>todos</h1>
            <div className = "container">
                <InputToDo addTodo = {this.addTodo}/>
                <ListTodo 
                items = {this.state.todos} 
                deleteTodo = {this.deleteTodo} 
                updateTodo = {this.updateTodo}/>
                <FilterTodo 
                filterButtons = {["All", "Active", "Completed"]}
                filterTodos = {this.filterTodos}
            />
            </div>
            </>
        )
    }
}

// box-shadow:
//    /* The top layer shadow */
//    0 1px 1px rgba(0,0,0,0.15),
//    /* The second layer */
//    0 10px 0 -5px #eee,
//    /* The second layer shadow */
//    0 10px 1px -4px rgba(0,0,0,0.15),
//     /* The third layer */
//    0 20px 0 -10px #eee,
//    /* The third layer shadow */
//    0 20px 1px -9px rgba(0,0,0,0.15);
//    padding: 30px;