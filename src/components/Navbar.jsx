import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar position="fixed" className="bg-slate-900 shadow-md" sx={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
        }}>
            <Toolbar className="flex justify-between max-w-7xl mx-auto w-full">

                {/* Left: Name */}
                <Typography variant="h6" className="font-bold">
                    Ankur
                </Typography>

                {/* Right: Navigation */}
                <div className="space-x-4 hidden md:block">
                    <Button
                        color="inherit"
                        component={NavLink}
                        to="/"
                        sx={{
                            "&.active": {
                                color: "#818cf8",
                                fontWeight: "bold",
                            },
                        }}
                    >
                        Home
                    </Button>

                    <Button
                        color="inherit"
                        component={NavLink}
                        to="/projects"
                        sx={{
                            "&.active": {
                                color: "#818cf8",
                                fontWeight: "bold",
                            },
                        }}
                    >
                        Projects
                    </Button>

                    <Button
                        color="inherit"
                        component={NavLink}
                        to="/about"
                        sx={{
                            "&.active": {
                                color: "#818cf8",
                                fontWeight: "bold",
                            },
                        }}
                    >
                        About
                    </Button>

                    <Button
                        color="inherit"
                        component={NavLink}
                        to="/contact"
                        sx={{
                            "&.active": {
                                color: "#818cf8",
                                fontWeight: "bold",
                            },
                        }}
                    >
                        Contact
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}