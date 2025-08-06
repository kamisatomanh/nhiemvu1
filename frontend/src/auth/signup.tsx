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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Birthday:", birthday);
    // TODO: Gửi request đăng ký
  };

  const handleClickLogin = () => {
    console.log("Đăng nhập");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Đăng ký
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
          <Box mb={2}>
            <TextField
              label="Nhâp lại mật khâu"
              type="password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Ho_ten"
              fullWidth
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="SDT"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Ngày sinh"
              fullWidth
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </Box>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Đăng ký
          </Button>
          <Box>
            <Link
              component="button"
              type="button"
              onClick={handleClickLogin}
              variant="body2"
            >
              Đăng nhập
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
