"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Badge,
  Button,
  Tooltip,
  useMediaQuery,
  useTheme,
  MenuItem,
} from "@mui/material";
import { Search, Notifications, Add } from "@mui/icons-material";
import { useState } from "react";
import { Menu } from "@mui/material";
export default function Navbar({
  searchTerm,
  setSearchTerm,
  isMobile,
  handleDrawerToggle,
}) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (isMobile) {
    return (
      <AppBar position="fixed" className="bg-white shadow-sm" elevation={1}>
        {" "}
        <Toolbar>
          {" "}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="text-gray-700"
          >
            {" "}
            <Menu />{" "}
          </IconButton>{" "}
          <div className="flex items-center space-x-3 flex-1">
            {" "}
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              {" "}
              <span className="text-white font-bold text-sm">L</span>{" "}
            </div>{" "}
            <Typography variant="h6" className="font-bold text-white">
              {" "}
              CRM Pro{" "}
            </Typography>{" "}
          </div>{" "}
          <div className="flex items-center gap-4">
            {" "}
            <IconButton className="text-gray-600">
              {" "}
              <Badge badgeContent={3} color="error">
                {" "}
                <Notifications />{" "}
              </Badge>{" "}
            </IconButton>{" "}
            <Avatar className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600">
              {" "}
              <span className="text-xs font-semibold">U</span>{" "}
            </Avatar>{" "}
          </div>{" "}
        </Toolbar>{" "}
      </AppBar>
    );
  }
  return (
    <div className="bg-white shadow-sm  border-b border-gray-200 sticky top-0 z-50">
      {" "}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex justify-between w-full items-center h-16">
          {" "}
          <div className="flex items-center space-x-4">
            {" "}
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              {" "}
              <span className="text-white font-bold text-lg">L</span>{" "}
            </div>{" "}
          </div>{" "}
          <div className={`flex-1 max-w-lg mx-8 ${isTablet ? "max-w-md" : ""}`}>
            {" "}
            <TextField
              fullWidth
              placeholder="Search group and join..."
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <Search className="text-gray-400" />{" "}
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "rgba(249, 250, 251, 0.8)",
                  "& fieldset": { borderColor: "rgba(229, 231, 235, 0.5)" },
                  "&:hover fieldset": {
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  },
                  "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
                },
              }}
            />{" "}
          </div>{" "}
          <div className="flex items-center gap-4">
            {" "}
            <Tooltip title="Notifications">
              {" "}
              <IconButton className="hover:bg-gray-100 transition-colors duration-200">
                {" "}
                <Badge badgeContent={3} color="error">
                  {" "}
                  <Notifications className="text-gray-600" />{" "}
                </Badge>{" "}
              </IconButton>{" "}
            </Tooltip>{" "}
            <div>
              {" "}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {" "}
                <Avatar className="w-9 h-9 bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg">
                  {" "}
                  <span className="text-sm font-semibold">U</span>{" "}
                </Avatar>{" "}
              </Button>{" "}
              <Menu
                className="m-[0px] py-0"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                {" "}
                <Button
                  className="m-[0px]"
                  onClick={() => {
                    handleLogout();
                    handleClose();
                  }}
                >
                  {" "}
                  Logout{" "}
                </Button>{" "}
              </Menu>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
