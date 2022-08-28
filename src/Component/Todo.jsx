import React,{useState} from "react";
import AddTodoForm from "./AddTodoForm";
import {v4} from "uuid";  

const Todo = ()=>{

    const [todos,setTodos] = useState([
        {id:0,todo:'Acheter du lait'},
        {id:1,todo:'Acheter du sucre'},
        {id:2,todo:'Acheter du pain'}
    ])
    const [warning,setWarning]=useState(false)
  
      
       const myTodos =   todos.map((todo,index)=>{
            return(
                <li className="list-group-item" key={todo.id}>{todo.todo}</li>
            )
         })
         const addNewTodo = (newTodo)=>{
            if (newTodo !== ''){
                warning && setWarning(false)
                setTodos([...todos,
                    {id:v4(),
                    todo:newTodo}])
            }
            else{
                setWarning(true)
            }
            
         }
        const warningMsg = warning && <div className="alert alert-danger mt-5" role="alert"
        >Veuillez indiquer un Todo
        </div>
    
    return(
        <div>
            {warningMsg}
            <h1 className="text-center"> {todos.length} TO-DO </h1>

            <ul  className="list-group">
                {myTodos}
            </ul>
            <AddTodoForm  addNewTodo={addNewTodo}/>
           
        </div>
    )
}
export default Todo;