import * as React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login as loginUser } from "../../features/user/userSlice";
import LogoImage from "../../assets/images/showcase-logo.png";
import { messages } from "../../constants/messages";
import { addAlert } from "../../features/alert/alertSlice";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(messages.emailRequired),
  password: yup.string().required(messages.passwordRequired).min(6),
});

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("submit");
    const res = await dispatch(loginUser(data));
    if (res?.meta?.requestStatus === "rejected") {
      await dispatch(
        addAlert({
          msg: res.payload,
          type: "error",
        })
      );
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <CssBaseline />
      <Box>
        <Box>
          <img src={LogoImage} alt="Logo" />
        </Box>
        <Typography variant="h6">
          Sign in to show your work and get discovered.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3, maxWidth: "400px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                {...register("email")}
                error={!!errors?.email}
                helperText={errors?.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                {...register("password")}
                error={!!errors?.password}
                helperText={errors?.password?.message}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Dont have an account?{" "}
              <Link to="/register" variant="body2">
                Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
