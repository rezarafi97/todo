import { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userSchema } from "../../validation/userValidation";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {};

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
          ثبت نام
        </Typography>
        <Box component="div" sx={{ marginX: 1 }}>
          <Formik
            initialValue={{
              username: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={userSchema}
            onSubmit={handleSubmit}
          >
            <Box component="div" sx={{ width: "30rem", overflow: "hidden" }}>
              <Form>
                <Field
                  type="text"
                  name="username"
                  placeholder="نام کاربری"
                  autoComplete="off"
                  style={{
                    border: 0,
                    outline: 0,
                    borderRadius: "0.7rem",
                    width: "30rem",
                    backgroundColor: "rgba(250,250,250,0.8)",
                    padding: "5px",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <ErrorMessage
                  name="username"
                  render={(msg) => (
                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "0.8rem",
                        display: "inline-block",
                        width: "30rem",
                      }}
                    >
                      {msg}
                    </Typography>
                  )}
                />
                <br />
                <Field
                  type="password"
                  name="password"
                  placeholder="رمز عبور"
                  style={{
                    border: 0,
                    outline: 0,
                    borderRadius: "0.7rem",
                    width: "30rem",
                    backgroundColor: "rgba(250,250,250,0.8)",
                    padding: "5px",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ErrorMessage
                  name="password"
                  style={{ width: "30rem" }}
                  render={(msg) => (
                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "0.8rem",
                        display: "inline-block",
                        width: "30rem",
                      }}
                    >
                      {msg}
                    </Typography>
                  )}
                />
                <br />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="تکرار رمز عبور"
                  style={{
                    border: 0,
                    outline: 0,
                    borderRadius: "0.7rem",
                    width: "30rem",
                    backgroundColor: "rgba(250,250,250,0.8)",
                    padding: "5px",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <ErrorMessage
                  name="password"
                  style={{ width: "30rem" }}
                  render={(msg) => (
                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "0.8rem",
                        display: "inline-block",
                        width: "30rem",
                      }}
                    >
                      {msg}
                    </Typography>
                  )}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    margin: "10px 0",
                    backgroundColor: "rgb(150,150,150)",
                    width: "30rem",
                    borderRadius: "0.7rem",
                  }}
                >
                  ثبت نام
                </Button>
              </Form>
            </Box>
          </Formik>
          <Box component="div" sx={{ marginTop: 2 }}>
            <Typography variant="subtitle1" sx={{ color: "rgb(100,100,100)" }}>
              قبلا ثبت نام کردی؟
            </Typography>
            <Link to="/login">ورود</Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignUp;
