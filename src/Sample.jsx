 
// counter

// import {useState} from 'react';

// function Sample() {
    //     const [count,SetCount]= useState(0)
    //     const increase=()=>{
        //         SetCount(count+1)
        //     }
        //     const decrease=()=>{
            //         SetCount(count-1)
            //     }
            //     return(
                //         <div>
                //             {count}
                //             <button onClick={increase}>add</button>
                //             <button onClick={decrease}>minus</button>
                //         </div>
                //     );
                
                // }
 
                
    //.................take color and change text colour using input

//     import {useState} from 'react';
//     function Sample(){
//     const [value,setValue]=useState('')
//     const getValue=(v)=>{
//         setValue(v.target.value)
//     }
//         return(
//             <div>
//     <h1 style={{ color: value}}>Sample-React {value }</h1>
//                 <input onChange={getValue} type="text" placeholder='colour' />
//             </div>
//         )
//     }

// export default Sample


// ..................................show/hidden with alert.............


// import React, { useState } from 'react';

// function Sample() {
//     const [value,setValue]=useState('')
//     const [hide,setHIde]=useState(false)
//     const inputValue=(val)=>{
//         setValue(val.target.value)
//     }
  
      
//     return(
//         <div>
           
                
//             {hide && <h1 style={{color:value}}>react  {value}</h1>}
            
//             <input onChange={inputValue} type="text" />
//             <button onClick={() => {
//         if (hide === false){
//             setHIde(true)

//             alert('text displayed')
//         }
//         else{

//             setHIde(false)
//             alert('text hidden')
//         }
        
//       }}>show/hidden</button>
//         </div>
//     )

// }

// export default Sample;


// .................show/hidden diff with text colour changing...........

// import React, { useState } from 'react';

// function Sample() {
//     const [hide,setHide]=useState(false)
//     const [colour,setColour]=useState('')
//     const colourAdding=(val)=>{
//         console.log(val.target.value);
//         setColour(val.target.value)
//     }
//     return(
//         <div>
//             {
//             hide && <h1 style={{ color: colour}}>react {colour}</h1>
//         }

//         <input onChange={colourAdding} type="text" />

//             <button onClick={()=>{
//                 setHide(!hide)
//             }}>hide/show</button>
//         </div>
//     )
    
// }
//     export default Sample;



// .................................inc & dec &set zero counter ................



// import React, { useState } from 'react';

// function Sample() {
//     const[count,setCount]=useState(0);
//     const decreasecount =()=>{
//         setCount(count-1)
//     }
//     const increasecount =()=>{
//         setCount(count+1)
//     }

//     return(
//         <div>
//             {count}
//             <button onClick={increasecount}>increase</button>
//             <button onClick={decreasecount}>decrease</button>
//             <button onClick={()=>{
//                 setCount(0)
//             }}>set to zero</button>
//         </div>
//     )
// }

// export default Sample;


//............. counter with limit.....................

//     import React, { useState } from 'react';

//     function Sample() {
//  const [count,setCount]=useState(1)
//     const inccount=()=>{ count<10 && setCount(count+1)}
//         return(
//             <div>
//                 <h1>{count}</h1>
//                 {count<10 && <button onClick={inccount}> inc</button>}
//             </div>
//         )
//     }
//     export default Sample;


//   ........................

import React, { useState } from 'react';
import './App.css';

    function Sample() {
        const [todoList,setTodoList]=useState([]);
        const [newTask,setNewTask]=useState('');
        const handleChange=(event)=>{
            setNewTask(event.target.value);
             
        }
        const addTask=()=>{  
            const task={
                id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
                taskName:newTask
            }
        setTodoList([...todoList,task]);  
        }

        const deleteTask =(id)=>{
           
            setTodoList(todoList.filter((task)=>task.id!==id ))
        }
        return(
            <div className='APP'>
                <div className='addTask'>
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}>ADD TASK</button>
                </div>
                <div className='list'>
                    {todoList.map((task)=>{
                        return (
                            <div className='task'>

                                <h1>{task.taskName}</h1>
                                <button onClick={()=>deleteTask(task.id)} > x </button>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }

    export default Sample;