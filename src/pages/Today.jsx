/* eslint-disable react/prop-types */
import { useMemo } from "react";
import {
  Typography,
} from "@mui/material";
import { useGetAllTasksQuery } from "../reducers/tasksSlice";
import Spinner from "../components/commons/Spinner";
import Grid from "@mui/material/Unstable_Grid2";
import { parseISO, add, isBefore } from "date-fns-jalali";
import FabNavigators from "../components/commons/FabNavigators";
import SingleTask from "../components/tasks/SingleTask";

const TodayTask = ({ task }) => {
  const tomorrow = add(new Date(), { days: 1 });

  const result = isBefore(parseISO(task.date), tomorrow);

  let content;

  if (result === true) {
    content = (
        <SingleTask task={task} />
    );
  } else if (result === false) {
    content = null;
  }

  return <>{content}</>;
};

const Today = () => {
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
      <FabNavigators />
    </>
  );
};

export default Today;
