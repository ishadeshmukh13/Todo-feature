import React from 'react'
import { useSelector } from 'react-redux'

const ListOfData = () => {
    const Data=useSelector(
        (state:any)=>state.todos
    );
    console.log(Data)
  return (
    <div>ListOfData</div>
  )
}

export default ListOfData