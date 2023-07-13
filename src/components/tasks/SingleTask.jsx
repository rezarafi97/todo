/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const SingleTask = ({ task }) => {
  return (
    <>
      <Grid xs={10} md={4} lg={3}>
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
    </>
  );
};

export default SingleTask;
