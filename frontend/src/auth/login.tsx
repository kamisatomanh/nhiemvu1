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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // TODO: Gửi request đăng nhập
  };

  const handleClickSignUp = () => {
    console.log("Đăng ký");
  };

  const handleClickForgotPassword = () => {
    console.log("Quen mat khau");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Đăng nhập
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Mật khẩu"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Đăng nhập
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: 1,
            }}
          >
            <Link
              component="button"
              type="button"
              onClick={handleClickForgotPassword}
              variant="body2"
            >
              Quên mật khẩu
            </Link>
            <Link
              component="button"
              type="button"
              onClick={handleClickSignUp}
              variant="body2"
            >
              Đăng ký
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
