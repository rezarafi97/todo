import { AccountCircle } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          "&.MuiAppBar-root": {
            backgroundColor: "whitesmoke",
            borderBottom: "1px solid gray",
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "rgb(100, 100, 100)" }}
          >
            <Link to="/">برنامه روزانه</Link>
          </Typography>
          <Box>
            <Link to="/login">ورود</Link>
            <Typography component="span" color="rgb(100,100,100)">/</Typography>
            <Link to="/signUp">ثبت نام</Link>
          </Box>
          <Box className="none">
            <AccountCircle sx={{color: "rgb(100,100,100)"}} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
