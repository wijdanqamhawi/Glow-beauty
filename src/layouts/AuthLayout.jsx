
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFF7FA",
      }}
    >
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
