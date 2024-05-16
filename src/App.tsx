//@ts-ignore
import {useState,useEffect} from 'react';
export default function App() {
    const [data,setData]=useState([])
    useEffect(  ()=>{
        fetch("https://dummyjson.com/products").then((response:any)=>{
          return response.json();
        })
        .then((json:any)=>{
          console.log(json)
        })
    })
    
  return <h1>Hello world{data}</h1>
}
