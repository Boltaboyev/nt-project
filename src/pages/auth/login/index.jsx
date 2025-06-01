import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import loginImage from "../../../assets/img/login.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4361ee",
      dark: "#3a56d4",
    },
    secondary: {
      main: "#f06292",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    body2: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 6,
          padding: "10px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 6,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "none",
        },
      },
    },
  },
});

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({username: false, password: false})

    const muiTheme = useTheme()
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"))

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {
            username: !username.trim(),
            password: !password.trim(),
        }
        setErrors(newErrors)

        const hasErrors = Object.values(newErrors).some((e) => e)
        if (hasErrors) return

        console.log("Yuborildi:", {username, password})
    }

    return (
        <ThemeProvider theme={theme}>
            <Container
                disableGutters
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "background.default",
                }}>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={10} lg={8}>
                        <Paper
                            elevation={0}
                            sx={{
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                p: isMobile ? 2 : 4,
                                borderRadius: 4,
                            }}>
                            {/* Form */}
                            <Box
                                sx={{
                                    flex: 1,
                                    p: isMobile ? 2 : 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h4" gutterBottom>
                                    Kirish
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    mb={4}>
                                    Travelwise hisobingizga kirish uchun
                                    ma'lumotlarni kiriting
                                </Typography>

                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    noValidate>
                                    <TextField
                                        fullWidth
                                        label="Foydalanuvchi nomi"
                                        variant="outlined"
                                        margin="normal"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        error={errors.username}
                                        helperText={
                                            errors.username
                                                ? "Foydalanuvchi nomi majburiy"
                                                : ""
                                        }
                                        sx={{mb: 3}}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Parol"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        error={errors.password}
                                        helperText={
                                            errors.password
                                                ? "Parol majburiy"
                                                : ""
                                        }
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={
                                                            togglePasswordVisibility
                                                        }
                                                        edge="end">
                                                        {showPassword ? (
                                                            <VisibilityOffIcon />
                                                        ) : (
                                                            <VisibilityIcon />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{mb: 4}}
                                    />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{mb: 3}}>
                                        Kirish
                                    </Button>

                                    <Typography
                                        variant="body2"
                                        textAlign="center">
                                        Hisobingiz yo‘qmi?{" "}
                                        <Button
                                            href="/register"
                                            color="secondary"
                                            sx={{
                                                textTransform: "none",
                                                p: 0,
                                                minWidth: "unset",
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                    background: "none",
                                                },
                                            }}>
                                            Ro‘yxatdan o‘tish
                                        </Button>
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Image */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: isMobile ? "none" : "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: 4,
                                }}>
                                <Box
                                    component="img"
                                    src={loginImage}
                                    alt="Kirish rasmi"
                                    sx={{
                                        maxWidth: "100%",
                                        height: 600,
                                        maxHeight: 600,
                                    }}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}