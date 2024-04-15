import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTodo } from "../Features/Todo/todoSlice";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  styled,
  TextareaAutosize,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
export const WebStyle = {
  buttonStyle: {
    textTransform:"inherit" as "inherit",
    fontSize: "16px",
    fontWeight: 500,
  marginTop: "20px",

    fontFamily: "Inter" as "Inter",
    lineHeight: "22px",
    color: "#fff",
    background: "#03B5AA",
    borderRadius: "8px",
  },
  heading: {
    fontSize: "25px",
    color: "#03B5AA",
    fontWeight: 700,
    fontFamily: "Inter",
    lineHeight: "22px",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "16px",
    color: "#03B5AA",
    fontWeight: 500,
    fontFamily: "Inter",
    lineHeight: "22px",
    marginBottom: "4px",
  },
  boxStyle: {
    display: "flex",
    minWidth: "400px",
    borderRadius: "16px",
    padding: "16px",
    maxWidth: "400px",
    flexDirection: "column" as "column",
    boxShadow:
      "0px 4px 8px 0px rgba(0, 0, 0, 0.03), 0px 8px 32px 0px rgba(0, 0, 0, 0.06)",
  },
};


const AddTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: nanoid(),
    title: "",
    description: "",
  });
  const [titleError,setTitleError]=useState(false)
  const [descriptionError,setDescriptionError]=useState(false)

  const handleError=()=>{
    if(data?.title.trim().length==0 && data?.description.trim().length==0){
     setTitleError(true) 
     setDescriptionError(true)

    }
    else if(data?.title.trim().length==0 ){
     setTitleError(true) 
if(data?.description.trim().length==0){
  setDescriptionError(true)

}
    }
    else if(data?.description.trim().length==0){
      setTitleError(true) 
 if(data?.title.trim().length==0){
   setDescriptionError(true)
 
 }
     }
     else{
       dispatch(addTodo(data));
 
       
       setTitleError(false)
       setDescriptionError(false)
       setData({
         id: nanoid(),
         title: "",
         description: "",
        });
        navigate(`/`);
     }
  }
 const  handleBorderDescription=()=>{
return descriptionError?"1px solid #DC2626":"1px solid #03B5AA"
  }
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
      <Typography style={WebStyle.heading}>Add Todo</Typography>
      <Box style={WebStyle.boxStyle}>
        <Typography style={WebStyle.subheading}>Title</Typography>
        <InputField
        error={titleError}
        helperText={titleError && "Enter a value "}
          placeholder="Enter title"
          variant="outlined"
          value={data.title}
          onChange={(e) => {
           
            setData((prevState) => ({
              ...prevState,
              title: e.target.value.slice(0,20),
            }));
            if(e.target.value.trim().length==0){
              setTitleError(true)
            }
            else{
              setTitleError(false)
            }
          }}
        />
        <Typography style={WebStyle.subheading}>Description</Typography>
       < PetStoryBox style={{
  marginBottom: descriptionError ?"40px":"20px",

       }}>
        <InputField2
          style={{
            overflow:"auto",
            border: handleBorderDescription(),
        }}

          aria-label="minimum height"
          minRows={6}
          placeholder="Enter description"
          value={data.description}
          onChange={(e) => {
            setData((prevState) => ({
              ...prevState,
              description: e.target.value.slice(0,500),
            }));
            
            if(e.target.value.trim().length==0){
              setDescriptionError(true)
            }
            else{
              setDescriptionError(false)
            }
          }}
        />
        {descriptionError && <span style={{ color: "#DC2626",
      fontSize: "12px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "18px"}}>
Enter a value
        </span>}
       </PetStoryBox>
        <Button
          style={WebStyle.buttonStyle}
          variant="contained"
          onClick={() => {
            handleError()

          }}
        >
          Add todo
        </Button>
      </Box>
    </Grid>
  );
};

const InputField = styled(TextField)({
  minWidth: "374px",
  marginBottom: "20px",
  "& .MuiInputBase-input[type='date']": {
      lineHeight: "19.2px",
      textTransform: 'uppercase',
      color: "#334155"
  },
  "& .MuiFormHelperText-root.Mui-error": {
      color: "#DC2626",
      fontSize: "12px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "18px"
  }
  , "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#DC2626"
  },


  "& .MuiInputBase-root": {
      color: "#334155"
  },
  "& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
      borderColor: "##03B5AA",
      borderWidth: "1px"
  },
  "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#03B5AA",
      borderWidth: "1px",
      borderRadius: "8px"
  },
  "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
          borderColor: "#03B5AA",
      },
      "&.Mui-focused fieldset": {
          borderWidth: "1px",
          borderColor: "#03B5AA",
      },
  },

  "& .MuiOutlinedInput-input": {
      padding: "12px 8px",
  },

  "& .MuiFormHelperText-contained": {
      marginLeft: "0px",
      marginRight: "0px"
  },
  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      border: "1px solid #03B5AA",
  },
  '@media (max-width:660px )': {
      minWidth: "unset",
      maxWidth: "unset",

  },
});

const PetStoryBox = styled(Box)({
  maxWidth: "375px",
  minWidth: "375px",

  maxHeight: "170px",
  height: "140px",
  minHeight: "140px",
  borderRadius: "8px",
  '@media (max-width:660px )': {
      minWidth: "unset",
      maxWidth: "unset",
  },
})
const InputField2 = styled(TextareaAutosize)({
  minWidth: "384px",
  minHeigh: "110px",
  maxWidth:"384px",
  padding: "8px",
  maxHeight: "140px",
  
  color: "var(--Neutrals-Cool-gray-900, #0F172A)",
  fontFamily: "Lato",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "150%",
  "&:focus-visible": {
     outline:"unset",
  },
  '@media (max-width:500px )': {
      minWidth: "300px",

  },
});
export default AddTodo;
