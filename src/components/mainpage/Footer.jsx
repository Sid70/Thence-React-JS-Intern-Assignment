import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Footoor() {
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

                    </Box>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding: "30px", fontSize: "medium" }}>
                        &copy; Talup 2023.All rights reserved.
                    </Typography>

                    <Box sx={{
                        display:"flex"
                    }}>
                        <Typography variant="h6" component="div" sx={{ padding: "30px", fontSize: "medium" , textDecoration:"underline" , color:"gray" }}>
                            Terms and condition
                        </Typography>

                        <Typography variant="h6" component="div" sx={{ padding: "30px", fontSize: "medium" , textDecoration:"underline" ,  color:"gray" }}>
                            Privacy Policy
                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
