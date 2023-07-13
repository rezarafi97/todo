/* eslint-disable react/prop-types */
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useGetTaskQuery,
  useDeleteTaskMutation,
  useEditTaskMutation,
} from "../reducers/tasksSlice";
import Spinner from "../components/commons/Spinner";
import { Box, Typography, Checkbox, Divider, Fab } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import ShowTime from "../components/commons/ShowTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

const CheckboxTask = ({ task, taskId }) => {
  const [editTask] = useEditTaskMutation();

  const [done, setDone] = useState(task.done);
  const [important, setImportant] = useState(task.important);

  const doneHandler = (e) => {
    setDone(e.target.checked);
  };

  const importantHandler = (e) => {
    setImportant(e.target.checked);
  };

  const handleSubmit = async () => {
    const editedTask = {
      id: taskId,
      title: task.title,
      content: task.content,
      userId: task.userId,
      done,
      important,
      date: task.date,
    };
    
    await editTask({...editedTask});
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box component="div">
          <Typography
            component="span"
            variant="caption"
            sx={{ color: "rgb(100,100,100)", marginRight: "22px" }}
          >
            آیا برنامه موردنظر را انجام داده اید؟
          </Typography>
          <Checkbox
            checked={done}
            onChange={doneHandler}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
        <br />
        <Box component="div">
          <Typography
            component="span"
            variant="caption"
            sx={{ color: "rgb(100,100,100)", marginRight: "22px" }}
          >
            آیا برنامه موردنظر اهمیت خاصی دارد؟
          </Typography>
          <Checkbox
            checked={important}
            onChange={importantHandler}
            inputProps={{ "aria-label": "controlled" }}
            icon={<StarOutlineIcon />}
            checkedIcon={<StarIcon />}
          />
        </Box>
      </Box>
      <Box component="div">
        <Typography
          component="span"
          variant="caption"
          sx={{ color: "rgb(100,100,100)", marginRight: "22px" }}
        >
          اگر می خواهید تغییرات را ذخیره کنید کلیک کنید!
        </Typography>
        <Fab
          sx={{
            backgroundColor: "rgb(200,200,200)",
            "&.MuiFab-root:hover": {
              backgroundColor: "rgb(150,150,150)",
            },
            margin: 1,
            width: "2rem",
            height: "2rem",
          }}
          onClick={handleSubmit}
        >
          <SaveIcon sx={{ fontSize: "1rem", color: "rgb(100, 100, 100)" }} />
        </Fab>
      </Box>
    </>
  );
};

const Task = () => {
  const { taskId } = useParams();

  const navigate = useNavigate();

  const { data: task, isLoading, isSuccess } = useGetTaskQuery(taskId);
  const [deleteTask] = useDeleteTaskMutation();

  const handleDelete = async () => {
    if (task) {
      await deleteTask(task.id);
      navigate("/tasksList/all");
    }
  };

  const historyBack = () => {
    navigate(-1);
  };

  let content;

  if (isLoading) {
    content = <Spinner text="درحال بارگذاری..." />;
  } else if (isSuccess) {
    content = (
      <Box
        sx={{
          maxWidth: "80%",
          maxHeight: "400px",
          marginX: "auto",
          marginY: 3,
          padding: 1,
          backgroundColor: "rgb(220,220,220)",
          border: "1px solid rgb(170,170,170)",
        }}
      >
        <Typography variant="h6" sx={{ color: "rgb(100,100,100)" }}>
          {task.title}
        </Typography>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box component="div">
            <Typography
              variant="subtitle1"
              sx={{ color: "rgb(100,100,100)", marginY: 2 }}
            >
              {task.content}
            </Typography>
          </Box>
          <ShowTime timestamp={task.date} />
        </Box>
        <Divider sx={{ marginY: 1 }} />
        <CheckboxTask task={task} taskId={taskId} />
        <Divider sx={{ marginY: 1 }} />
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box component="div">
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
            >
              <Link to={`/editTasks/${taskId}`}>
                <EditIcon sx={{ marginTop: "8px" }} />
              </Link>
            </Fab>
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
            >
              <DeleteIcon
                sx={{ color: "rgb(100, 100, 100)" }}
                onClick={handleDelete}
              />
            </Fab>
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
              onClick={historyBack}
            >
                <ArrowBackIcon sx={{ color: "rgb(100, 100, 100)" }} />
            </Fab>
          </Box>
        </Box>
      </Box>
    );
  }

  return <>{content}</>;
};

export default Task;
