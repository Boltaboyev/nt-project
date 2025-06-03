"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Chip,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Person,
  Group,
  Add,
  Settings,
  Logout,
  Close,
} from "@mui/icons-material";
import { useState } from "react";
import { useCreateGroupMutation } from "../../api/mutation";

export default function Sidebar({ isMobile, mobileOpen, handleDrawerToggle }) {
  const [dialog, setDialog] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const { mutate } = useCreateGroupMutation();

  const sidebarContent = (
    <div className="h-full bg-white">
      <div className="p-4 lg:p-6">
        {/* Mobile header */}
        {isMobile && (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <Typography variant="h6" className="font-bold">
                CRM Pro
              </Typography>
            </div>
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </div>
        )}

        <List className="space-y-2">
          <ListItem className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm border border-blue-200/50">
            <ListItemIcon>
              <Person className="text-blue-600" />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
            />
          </ListItem>

          <ListItem className="rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:shadow-sm">
            <ListItemIcon>
              <Group className="text-gray-600" />
            </ListItemIcon>
            <ListItemText
              primary="Groups"
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
            />
            <Chip
              label="5"
              size="small"
              className="bg-gray-100 text-gray-600"
            />
          </ListItem>

          <ListItem className="rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:shadow-sm">
            <button
              className="flex border-none"
              onClick={() => setDialog(true)}
            >
              <ListItemIcon>
                <Add className="text-gray-600" />
              </ListItemIcon>
              <ListItemText
                primary="Create Group"
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: isMobile ? "0.9rem" : "1rem",
                }}
              />
            </button>
          </ListItem>
        </List>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between px-4">
            <Typography variant="body2" className="text-gray-500 font-medium">
              n17
            </Typography>
            <Tooltip title="Logout">
              <IconButton
                size="small"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Logout fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <Dialog
        open={dialog}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              const password = formJson.password;
              mutate({ name: email, password: password });
              console.log("Email:", email);
              console.log("Password:", password);
              setDialog(false);
            },
          },
        }}
      >
        <DialogTitle>Guruh yaratish</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Guruh nomi"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Parol"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog(false)}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <div
      className={`${
        isTablet ? "w-64" : "w-72"
      } bg-white min-h-screen shadow-xl border-r border-gray-200`}
    >
      {sidebarContent}
    </div>
  );
}
