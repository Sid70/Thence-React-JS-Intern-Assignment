import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';
import Image from '../../images/Brunel_logo.png';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                width: "98.5%",
                m: "1rem auto",
                borderTopRightRadius: "2.5rem",
                borderBottomRightRadius: "2.5rem",
                borderTopLeftRadius: "2.5rem",
                borderBottomLeftRadius: "2.5rem",
                bgcolor: "white",
                color: "black"
            }}>
                <Toolbar>

                    <Box sx={{
                        px: "1rem"
                    }}>
                        <img src={Image} alt="Menu" width={"70px"} />
                    </Box>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Fab
                            variant="extended"
                            size="medium"
                            color="primary"
                            sx={{
                                mr: "1rem",
                                bgcolor: "white",
                                color: "black",
                                fontSize: "13px",
                                textTransform: "capitalize",
                                px: "1.2rem",
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)' // Add hover effect
                                }
                            }}
                        >
                            Get Projects
                        </Fab>
                    </Link>
                    <Fab variant="extended" size="medium" color="primary" sx={{
                        bgcolor: "black",
                        color: "white",
                        fontSize: "13px",
                        textTransform: "capitalize",
                        px: "1.2rem",
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.52)' // Add hover effect
                        }
                    }}>
                        Onboard Talent
                    </Fab>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
