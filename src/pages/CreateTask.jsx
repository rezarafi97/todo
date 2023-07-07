import { Box, Typography, Fab, Divider } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { useAddNewTaskMutation } from "../reducers/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import FabNavigators from "../components/commons/FabNavigators";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const [addNewTask, { isLoading }] = useAddNewTaskMutation();

  const titleHandler = (e) => setTitle(e.target.value);
  const contentHandler = (e) => setContent(e.target.value);
  const dateHandler = (e) => setDate(e.target.value);


  const canSave = [title, content, date].every(Boolean) && !isLoading;

  const submitHandler = async () => {
    if (canSave) {
      try {
        await addNewTask({
          id: nanoid(),
          title,
          content,
          userId: "u0",
          done: false,
          important: false,
          date,
        }).unwrap();
        setTitle("");
        setContent("");
        setDate("");
        navigate("/tasksList");
      } catch (error) {
        console.error("Failed to save the blog", error);
      }
    }
  };

  return (
    <>
      <Typography variant="h5" sx={{margin: 4, color: "rgb(120,120,120)"}}>
        ایجاد برنامه جدید
      </Typography>
      <Box
        component="div"
        sx={{
          maxWidth: "80%",
          marginX: "auto",
          marginY: 3,
          padding: "1rem",
          backgroundColor: "rgb(220,220,220)",
          border: "1px solid rgb(170,170,170)",
        }}
      >
        <form autoComplete="off">
          <input
            type="text"
            id="taskTitle"
            name="taskTitle"
            value={title}
            placeholder="عنوان برنامه"
            onChange={titleHandler}
            style={{
              border: 0,
              outline: 0,
              borderRadius: "0.7rem",
              width: "70%",
              backgroundColor: "rgba(250,250,250,0.8)",
              padding: "5px",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <br />
          <textarea
            id="taskContent"
            name="taskContent"
            value={content}
            placeholder="محتوای برنامه"
            onChange={contentHandler}
            style={{
              border: 0,
              outline: 0,
              borderRadius: "0.7rem",
              width: "70%",
              backgroundColor: "rgba(250,250,250,0.8)",
              padding: "5px",
            }}
          />
          <Divider sx={{ marginY: 2 }} />
          <label
            htmlFor="taskDate"
            style={{ color: "rgb(100,100,100)", fontSize: "0.9rem" }}
          >
            تاریخ انجام برنامه:
          </label>
          <br />
          <input
            type="date"
            id="taskDate"
            name="taskDate"
            value={date}
            onChange={dateHandler}
            style={{
              border: 0,
              outline: 0,
              borderRadius: "0.7rem",
              width: "70%",
              backgroundColor: "rgba(250,250,250,0.8)",
              padding: "5px",
              marginTop: "0.5rem",
            }}
          />
          <Divider sx={{ marginY: 2 }} />
          <Fab
            sx={{
              backgroundColor: "rgb(200,200,200)",
              "&.MuiFab-root:hover": {
                backgroundColor: "rgb(150,150,150)",
              },
              margin: 1,
              width: "3rem",
              height: "3rem",
            }}
            onClick={submitHandler}
            disabled={!canSave}
          >
            <SaveIcon sx={{ color: "rgb(100, 100, 100)" }} />
          </Fab>
        </form>
      </Box>

      <FabNavigators />
    </>
  );
};

export default CreateTask;
