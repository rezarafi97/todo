import { Box, Typography, Fab, Divider, Zoom } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { useAddNewTaskMutation } from "../reducers/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate, Link } from "react-router-dom";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import TodayIcon from "@mui/icons-material/Today";
import ListIcon from "@mui/icons-material/List";
import TaskIcon from "@mui/icons-material/Task";
import AlarmIcon from "@mui/icons-material/Alarm";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const [addNewTask, { isLoading }] = useAddNewTaskMutation();

  const titleHandler = (e) => setTitle(e.target.value);
  const contentHandler = (e) => setContent(e.target.value);
  const dateHandler = (e) => setDate(e.target.value);

  const drawerHandler = () => {
    setOpen(!open);
  };

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

      <Fab
        sx={{
          position: "fixed",
          bottom: 10,
          left: 10,
          backgroundColor: "rgb(200,200,200)",
          "&.MuiFab-root:hover": {
            backgroundColor: "rgb(150,150,150)",
          },
        }}
        onClick={drawerHandler}
      >
        <ScatterPlotIcon />
      </Fab>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Fab
          sx={{
            position: "fixed",
            bottom: "80px",
            left: "10px",
            backgroundColor: "rgb(120,120,120)",
            "&.MuiFab-root:hover": {
              backgroundColor: "rgb(90,90,90)",
            },
          }}
        >
          <Link to="/tasksList/today">
            <TodayIcon sx={{ color: "black", marginTop: "8px" }} />
          </Link>
        </Fab>
      </Zoom>

      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Fab
          sx={{
            position: "fixed",
            bottom: "150px",
            left: "10px",
            backgroundColor: "rgb(120,120,120)",
            "&.MuiFab-root:hover": {
              backgroundColor: "rgb(90,90,90)",
            },
          }}
        >
          <Link to="/tasksList/important">
            <StarOutlineIcon sx={{ color: "black", marginTop: "8px" }} />
          </Link>
        </Fab>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Fab
          sx={{
            position: "fixed",
            bottom: "220px",
            left: "10px",
            backgroundColor: "rgb(120,120,120)",
            "&.MuiFab-root:hover": {
              backgroundColor: "rgb(90,90,90)",
            },
          }}
        >
          <Link to="/tasksList">
            <ListIcon sx={{ color: "black", marginTop: "8px" }} />
          </Link>
        </Fab>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Fab
          sx={{
            position: "fixed",
            bottom: "290px",
            left: "10px",
            backgroundColor: "rgb(120,120,120)",
            "&.MuiFab-root:hover": {
              backgroundColor: "rgb(90,90,90)",
            },
          }}
        >
          <Link to="/tasksList/done">
            <TaskIcon sx={{ color: "black", marginTop: "8px" }} />
          </Link>
        </Fab>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Fab
          sx={{
            position: "fixed",
            bottom: "360px",
            left: "10px",
            backgroundColor: "rgb(120,120,120)",
            "&.MuiFab-root:hover": {
              backgroundColor: "rgb(90,90,90)",
            },
          }}
        >
          <Link to="/tasksList/undone">
            <AlarmIcon sx={{ color: "black", marginTop: "8px" }} />
          </Link>
        </Fab>
      </Zoom>
    </>
  );
};

export default CreateTask;
