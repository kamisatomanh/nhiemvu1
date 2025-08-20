import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
  roles?: string[]; // optional: phân quyền (admin, user,...)
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
  const token = localStorage.getItem("access_token");
  const userRole = localStorage.getItem("role"); // lưu từ lúc login

  // Nếu chưa đăng nhập
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Nếu có phân quyền và role không hợp lệ
  if (roles && !roles.includes(userRole || "")) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Nếu hợp lệ thì render component con
  return <>{children}</>;
};

export default PrivateRoute;
