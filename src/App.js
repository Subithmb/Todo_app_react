import {useState}from 'react'
import './App.css';
const currentDate = new Date();
const currentDay = currentDate.getDate();

function App() {
  const [todos,setTodos]=useState([]);
  const [todo,setTodo]=useState('');
  return (

    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
 
      <h2>Whoop, it's {currentDay}  </h2>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)}  type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...todos,{id:Date.now(), text: todo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {todos.map ((obj)=>{

return (
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            
            setTodos(todos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))

          }}
         value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i id={obj.id} className="fas fa-times" onClick={(e)=>{
              let index= todos.findIndex(obj=>{return obj.id == e.target.id})
              if (index !== -1) {
                todos.splice(index, 1);
                setTodos([...todos]);
              }
            }}></i>
        </div> 
      </div> ) } ) }
   
   {todos.map((obj)=>{
    if(obj.status){
      return (
        <h1>{obj.text}</h1>
      )
    }
    return null
   })}

    </div>
  </div>
    
  
  );
}

export default App;





// rempving code  

{/* <i id={obj.id} className="fas fa-times" onClick={(e)=>{
              let index= toDos.findIndex(obj=>{return obj.id==e.target.id})
              if (index !== -1) {
                toDos.splice(index, 1);
                settoDos([...toDos]);
              }
            }}>
</i> */}