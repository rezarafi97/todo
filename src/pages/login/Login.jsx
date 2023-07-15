import { Box, Typography, Button, Grid, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          maxHeight: "auto",
          marginY: 3,
          paddingX: 2,
          paddingY: 4,
          backgroundColor: "rgb(220,220,220)",
          border: "1px solid rgb(170,170,170)",
        }}
        justifyContent="center"
      >
        <Typography
          variant="h6"
          sx={{ color: "rgb(100,100,100)", marginBottom: 2 }}
        >
          ورود
        </Typography>
        <Box component="div" sx={{ marginX: 1 }}>
          <form>
            <input
              type="text"
              placeholder="نام کاربری"
              autoComplete="off"
              required
              style={{
                border: 0,
                outline: 0,
                borderRadius: "0.7rem",
                width: "100%",
                backgroundColor: "rgba(250,250,250,0.8)",
                padding: "5px",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
            <br />
            <input
              type="password"
              placeholder="رمز عبور"
              required
              style={{
                border: 0,
                outline: 0,
                borderRadius: "0.7rem",
                width: "100%",
                backgroundColor: "rgba(250,250,250,0.8)",
                padding: "5px",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
            <br />
            <Button
              variant="contained"
              style={{
                margin: "10px 0",
                backgroundColor: "rgb(150,150,150)",
                width: "30rem",
                borderRadius: "0.7rem",
              }}
            >
              ورود
            </Button>
          </form>
          <Box component="div" sx={{ marginTop: 2 }}>
            <Checkbox />
            <Typography component="span" variant="subtitle1" sx={{ color: "rgb(100,100,100)" }}>
              به این دستگاه اعتماد داری؟
            </Typography>
          </Box>
          <Box component="div" sx={{ marginTop: 2, marginLeft: 1 }}>
            <Typography variant="subtitle1" sx={{ color: "rgb(100,100,100)" }}>
              هنوز ثبت نام نکردی؟
            </Typography>
            <Link to="/signUp">ثبت نام</Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
