import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/1f468-200d-1f4bb.png"
import { Link } from "react-router-dom"
import { Formik } from "formik"

import useAuthCalls from "../hooks/useAuthCalls"
import LoginForm, { loginScheme } from "../components/auth/LoginForm"

const Login = () => {
  const { login } = useAuthCalls()

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "80vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            BLOG APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6} >
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
              login(values)
              actions.resetForm()
              actions.setSubmitting(false)
            }}
            component={(props) => <LoginForm {...props} />}
          >

          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6} sx={{textAlign:"center" ,alignItems:"center" }} >
          <Container>
            <img src={image} alt="img" style={{alignItems:"center"}} />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
