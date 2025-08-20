import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link,
  Avatar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);
      formData.append("name", name);
      if (avatar) {
        formData.append("avatar", avatar); // gửi file avatar
      }
      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   Accept: "application/json",
        // },
        body: formData,
      });

      const text = await response.text(); // lấy text trước để debug
      console.log("Raw response:", text);

      const data = JSON.parse(text); // parse JSON thủ công
      console.log("Parsed JSON:", data);

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("user", JSON.stringify(data.user));
      if (response.ok) {
        // Đăng nhap thanh cong, chuyen huong den trang admin
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // const handleClickLogin = () => {
  //   console.log("Đăng nhập");
  // };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Box>
          <Button variant="contained" component="label">
            Chọn Avatar
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files?.[0] || null)}
            />
          </Button>

          {avatar && (
            <div style={{ marginTop: 10 }}>
              <Avatar
                src={URL.createObjectURL(avatar)}
                sx={{ width: 64, height: 64 }}
              />
            </div>
          )}
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Đăng ký
          </Button>
          <Box>
            <Link
              component={RouterLink}
              to="/login"
              type="button"
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
