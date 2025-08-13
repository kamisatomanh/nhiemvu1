import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    // TODO: Gửi request forgot password
  };

  // const handleClickLogin = () => {
  //   console.log("đăng nhập");
  // };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Quen mật khẩu
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Button
            //onClick={validateInputs}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            gửi
          </Button>
          <Box>
            <Link
              component={RouterLink}
              to="/login"
              type="button"
              variant="body2"
            >
              đăng nhập
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
