/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Fab,
  Typography,
  Zoom,
} from "@mui/material";
import { useGetAllTasksQuery } from "../api/apiSLice";
import Spinner from "../components/commons/Spinner";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import ListIcon from "@mui/icons-material/List";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { parseISO, add, isBefore } from "date-fns-jalali";
import TaskIcon from "@mui/icons-material/Task";
import AlarmIcon from "@mui/icons-material/Alarm";

const TodayTask = ({ task }) => {
  const tomorrow = add(new Date(), { days: 1 });

  const result = isBefore(parseISO(task.date), tomorrow);

  let content;

  if (result === true) {
    content = (
      <Grid xs={12} md={4} lg={3}>
        <Card sx={{ backgroundColor: "rgb(220,220,220)" }}>
          <CardContent sx={{ height: "100px" }}>
            <Typography
              variant="h5"
              sx={{ color: "rgb(100,100,100)", marginBottom: "10px" }}
            >
              {task.title}
            </Typography>
            <Typography variant="subtitle" sx={{ color: "rgb(100,100,100)" }}>
              {task.content}
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              sx={{
                "&.MuiButton-root:hover": {
                  backgroundColor: "rgb(200,200,200)",
                },
              }}
            >
              <Link to={`/taskslist/${task.id}`}>دیدن کامل برنامه</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  } else if (result === false) {
    content = null;
  }

  return <>{content}</>;
};

const Today = () => {
  const [open, setOpen] = useState(false);

  const drawerHandler = () => {
    setOpen(!open);
  };

  const {
    data: tasks = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllTasksQuery();

  const sortedTasks = useMemo(() => {
    const sortedTasks = tasks.slice();
    sortedTasks.sort((a, b) => a.date.localeCompare(b.date));
    return sortedTasks;
  }, [tasks]);

  let content;

  if (isLoading) {
    content = <Spinner text="درحال بارگذاری..." />;
  } else if (isSuccess) {
    content = sortedTasks.map((task) => (
      <TodayTask key={task.id} task={task} />
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <>
      <Typography variant="h5" sx={{ margin: 4, color: "rgb(120,120,120)" }}>
        برنامه های امروز
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ maxWidth: "90%", marginX: "auto", marginY: 1 }}
      >
        {content}
      </Grid>
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
          <Link to="/tasksList/important">
            <StarOutlineIcon sx={{ color: "black", marginTop: "8px" }} />
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
          <Link to="/tasksList">
            <ListIcon sx={{ color: "black", marginTop: "8px" }} />
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
          <Link to="/tasksList/create-task">
            <AddTaskIcon sx={{ color: "black", marginTop: "8px" }} />
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

export default Today;
