import { Box, Typography } from "@mui/material";

const SignUp = () => {
  return (
    <Box
      sx={{
        maxWidth: "60%",
        maxHeight: "auto",
        marginX: "auto",
        marginY: 3,
        padding: 1,
        backgroundColor: "rgb(220,220,220)",
        border: "1px solid rgb(170,170,170)",
      }}
    >
      <Typography variant="h6" sx={{ color: "rgb(100,100,100)" }}>
        ثبت نام
      </Typography>
      
    </Box>
  );
};

export default SignUp;
