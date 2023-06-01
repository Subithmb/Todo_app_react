
import "./App.css";
import React from 'react';
import{useState,useEffect} from 'react';
import  Axios  from "axios";



function PredictAge() {
    const [predict,setPredict]=useState('')
    const [Name,setName]=useState('')
 const ageprediction=(name)=>{
   
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
       
        setPredict({
            age: res.data.age,
            name: res.data.name
          });
      });
 }
 useEffect(()=>{
    ageprediction(Name)
     },[]);

 const inputvalue=(val)=>{
  
    setName(val.target.value)
   
 }
  return (
    <div>
        <h1>predictAge</h1>
        <input onChange={inputvalue} type="text" placeholder="enter Name" />
      
        <button onClick={()=>ageprediction(Name)}>predict</button>
        <h2>{predict?.name} your predicted age is :{predict?.age}</h2>
      
    </div>
    
  )
}

export default PredictAge