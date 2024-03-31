import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoPayload, addTodo, removeTodo } from "../Features/Todo/todoSlice";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  styled,
  TextareaAutosize,
} from "@material-ui/core";
const WebStyle = {
  buttonStyle: {
    textTransform:"inherit" as "inherit",
    fontSize: "16px",
    fontWeight: 500,
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
const TextareaAutosizeStyle = styled(TextareaAutosize)({
  borderColor: "#03B5AA",
  maxWidth: "378px",
  borderRadius: "4px",
  paddingLeft: "8px",
  padding: "11px 14px",

  minWidth: "378px",
  marginBottom: "20px",
  maxHeight: "200px",
  overflow: "auto !important",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#03B5AA",
  },
  "& :focus-visible ": {
    borderColor: "#03B5AA",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#03B5AA",
  },

  "& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
    borderColor: "#03B5AA",
  },
  "& .MuiOutlinedInput-input": {
    padding: "11px 14px",
  },
});
const TextFieldStyle = styled(TextField)({
  borderColor: "#03B5AA",
  marginBottom: "20px",
  maxWidth: "400px",
  minWidth: "400px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#03B5AA",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#03B5AA",
  },

  "& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
    borderColor: "#03B5AA",
  },
  "& .MuiOutlinedInput-input": {
    padding: "11px 14px",
  },
});
const AddTodo = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: nanoid(),
    title: "",
    description: "",
  });
  const Dataaa = useSelector((state: any) => state.todoData);
  return (
    <Grid
      container
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography style={WebStyle.heading}>Add Todo</Typography>
      <Box style={WebStyle.boxStyle}>
        <Typography style={WebStyle.subheading}>Title</Typography>
        <TextFieldStyle
          placeholder="Enter title"
          variant="outlined"
          value={data.title}
          onChange={(e) => {
            setData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }));
          }}
        />
        <Typography style={WebStyle.subheading}>Description</Typography>
        <TextareaAutosizeStyle
          aria-label="minimum height"
          minRows={6}
          placeholder="Enter description"
          value={data.description}
          onChange={(e) => {
            setData((prevState) => ({
              ...prevState,
              description: e.target.value,
            }));
          }}
        />
        <Button
          style={WebStyle.buttonStyle}
          variant="contained"
          onClick={() => {
            dispatch(addTodo(data));
            setData({
              id: nanoid(),
              title: "",
              description: "",
            });
          }}
        >
          Add todo
        </Button>
      </Box>
      <Typography>List of data</Typography>

      {Dataaa.map((item: TodoPayload) => {
        return (
          <>
            <Typography key={item?.id}>{item.title}</Typography>
            <Typography>{item?.description}</Typography>
            <Button
              onClick={() => {
                dispatch(removeTodo(item.id));
              }}
            >
              delete
            </Button>
          </>
        );
      })}
    </Grid>
  );
};

export default AddTodo;
