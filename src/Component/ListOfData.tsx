import { Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoPayload, removeTodo } from '../Features/Todo/todoSlice';
import { WebStyle } from './AddTodo';
import { DeleteOutline } from '@mui/icons-material';

const ListOfData = () => {
  const dispatch = useDispatch();
  const Dataaa = useSelector((state: any) => state.todoData);
    
  return (
    <Grid
    container
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    
    <Typography style={WebStyle.heading}>
      List of data
    </Typography>
    {Dataaa && Dataaa.map((item: TodoPayload) => {
        return (
          <Box style={{display:"flex",alignItems:"center",marginTop:"20px",borderBottom:"1px solid #03B5AA",flexDirection:"row",maxWidth:"600px",minWidth:"600px",justifyContent:"space-between"}}>
            <Box style={{display:"flex",flexDirection:"column"}}>

            <Typography key={item?.id} style={{...WebStyle.heading,fontSize:"14px"}}>{item.title}</Typography>
            
            <Typography style={{...WebStyle.heading,color:"unset",fontSize:"12px",wordBreak:"break-all"}}>{item?.description}</Typography>
            </Box>
            <Button
              onClick={() => {
                dispatch(removeTodo(item.id));
              }}
            >
             <DeleteOutline/>
            </Button>
           
          </Box>
        );
      })}
   </Grid>
  )
}

export default ListOfData