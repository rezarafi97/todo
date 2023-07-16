import { AppBar, Toolbar, Typography } from "@mui/material";
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
