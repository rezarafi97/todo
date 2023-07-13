import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fab, Zoom, Tooltip } from "@mui/material";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import TodayIcon from "@mui/icons-material/Today";
import ListIcon from "@mui/icons-material/List";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AlarmIcon from "@mui/icons-material/Alarm";
import TaskIcon from "@mui/icons-material/Task";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const FabNavigators = () => {
  const [open, setOpen] = useState(false);

  const drawerHandler = () => {
    setOpen(!open);
  };

  return (
    <>
    <Tooltip title="لیست صفحات" placement="right">
      <Fab
        sx={{
          position: "fixed",
          bottom: 10,
          right: 10,
          backgroundColor: "rgb(200,200,200)",
          "&.MuiFab-root:hover": {
            backgroundColor: "rgb(150,150,150)",
          },
        }}
        onClick={drawerHandler}
      >
        <ScatterPlotIcon />
      </Fab>
      </Tooltip>

      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Tooltip title="برنامه های امروز" placement="right">
          <Fab
            sx={{
              position: "fixed",
              bottom: "80px",
              right: "10px",
              backgroundColor: "rgb(120,120,120)",
              "&.MuiFab-root:hover": {
                backgroundColor: "rgb(90,90,90)",
              },
            }}
            className="fab"
          >
            <NavLink to="/tasksList/today">
              <TodayIcon sx={{ color: "black", marginTop: "8px" }} />
            </NavLink>
          </Fab>
        </Tooltip>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Tooltip title="برنامه های مهم" placement="right">
          <Fab
            sx={{
              position: "fixed",
              bottom: "150px",
              right: "10px",
              backgroundColor: "rgb(120,120,120)",
              "&.MuiFab-root:hover": {
                backgroundColor: "rgb(90,90,90)",
              },
            }}
            className="fab"
          >
            <NavLink to="/tasksList/important">
              <StarOutlineIcon sx={{ color: "black", marginTop: "8px" }} />
            </NavLink>
          </Fab>
        </Tooltip>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Tooltip title="ایجاد برنامه جدید" placement="right">
          <Fab
            sx={{
              position: "fixed",
              bottom: "220px",
              right: "10px",
              backgroundColor: "rgb(120,120,120)",
              "&.MuiFab-root:hover": {
                backgroundColor: "rgb(90,90,90)",
              },
            }}
            className="fab"
          >
            <NavLink to="/tasksList/create-task">
              <AddTaskIcon sx={{ color: "black", marginTop: "8px" }} />
            </NavLink>
          </Fab>
        </Tooltip>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Tooltip title="همه برنامه ها" placement="right">
          <Fab
            sx={{
              position: "fixed",
              bottom: "290px",
              right: "10px",
              backgroundColor: "rgb(120,120,120)",
              "&.MuiFab-root:hover": {
                backgroundColor: "rgb(90,90,90)",
              },
            }}
            className="fab"
          >
            <NavLink to="/tasksList/all">
              <ListIcon sx={{ color: "black", marginTop: "8px" }} />
            </NavLink>
          </Fab>
        </Tooltip>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Tooltip title="برنامه های انجام شده" placement="right">
          <Fab
            sx={{
              position: "fixed",
              bottom: "360px",
              right: "10px",
              backgroundColor: "rgb(120,120,120)",
              "&.MuiFab-root:hover": {
                backgroundColor: "rgb(90,90,90)",
              },
            }}
            className="fab"
          >
            <NavLink to="/tasksList/done">
              <TaskIcon sx={{ color: "black", marginTop: "8px" }} />
            </NavLink>
          </Fab>
        </Tooltip>
      </Zoom>
      <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
        <Tooltip title="برنامه های انجام نشده" placement="right">
          <Fab
            sx={{
              position: "fixed",
              bottom: "430px",
              right: "10px",
              backgroundColor: "rgb(120,120,120)",
              "&.MuiFab-root:hover": {
                backgroundColor: "rgb(90,90,90)",
              },
            }}
            className="fab"
          >
            <NavLink to="/tasksList/undone">
              <AlarmIcon sx={{ color: "black", marginTop: "8px" }} />
            </NavLink>
          </Fab>
        </Tooltip>
      </Zoom>
    </>
  );
};

export default FabNavigators;
