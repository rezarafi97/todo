import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import TodayIcon from '@mui/icons-material/Today';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AlarmIcon from '@mui/icons-material/Alarm';
import ListIcon from "@mui/icons-material/List";

const Home = () => {
  return (
    <Box sx={{ position: "absolute", width: "100%" }}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector 
              sx={{
                "&.MuiTimelineConnector-root": {
                  height: "20px"
                }
              }}
            />
            <TimelineDot>
              <ListIcon fontSize="medium" />
            </TimelineDot>
            <TimelineConnector 
              sx={{
                "&.MuiTimelineConnector-root": {
                  height: "20px"
                }
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: "28px" }}>
            <Link to="/tasksList">همه برنامه ها</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <AlarmIcon fontSize="medium" />
            </TimelineDot>
            <TimelineConnector 
              sx={{
                "&.MuiTimelineConnector-root": {
                  height: "20px"
                }
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: "8px" }}>
            <Link to="/tasksList/undone">برنامه های انجام نشده</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector 
              sx={{
                "&.MuiTimelineConnector-root": {
                  height: "20px"
                }
              }}
            />
            <TimelineDot>
              <TaskIcon fontSize="medium" />
            </TimelineDot>
            <TimelineConnector 
              sx={{
                "&.MuiTimelineConnector-root": {
                  height: "20px"
                }
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: "28px" }}>
            <Link to="/tasksList/done">برنامه های انجام شده</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <TodayIcon fontSize="medium" />
            </TimelineDot>
            <TimelineConnector 
              sx={{
                "&.MuiTimelineConnector-root": {
                  height: "20px"
                }
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: "8px" }}>
            <Link to="/tasksList/today">برنامه های امروز</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <StarOutlineIcon fontSize="medium" />
            </TimelineDot>
            <TimelineConnector 
              sx={{
                "&.MuiTimelineConnector-root": {
                  height: "20px"
                }
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: "8px" }}>
            <Link to="/tasksList/important">برنامه های مهم</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <AddTaskIcon fontSize="medium" />
            </TimelineDot>
            <TimelineConnector 
              sx={{
                "&.MuiTimelineConnector-root": {
                  height: "20px"
                }
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: "8px" }}>
            <Link to="/tasksList/create-task">برنامه جدید</Link>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Home;
