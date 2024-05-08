import React, { useEffect, useState } from 'react';
import Image from '../images/Brunel_logo.png';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import "../components/mainpage/style.css";

export default function Success() {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        const redirectTimer = setTimeout(() => {
            navigate('/');
            navigate(0);
        }, 5000);

        return () => {
            clearInterval(countdown);
            clearTimeout(redirectTimer);
        };
    }, [navigate]);

    return (
        <div>
            <Box sx={{
                p: "1rem 2rem"
            }}>
                <Box>
                    <img src={Image} alt="Menu" width={"70px"} />
                </Box>
            </Box>

            <Box sx={{
                m: "8rem auto"
            }}>
                <Box sx={{
                    textAlign: "center",
                }}>
                    <CheckCircleIcon sx={{
                        fontSize: "5rem",
                        bgcolor: "white",
                        color: "#28B246"
                    }} />
                </Box>

                <Box sx={{
                    textAlign: "center",
                    width: "30%",
                    m: "2rem auto"
                }}>
                    <Typography variant='h5' fontFamily={"Covered By Your Grace"} color={"#28B246"}>Success Submitted</Typography>
                    <Typography variant='h3'>Congratulations</Typography>
                    <Typography color={"#727272"}>Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates.</Typography>
                </Box>
            </Box>

            <Box>
                <Typography color={"#727272"} sx={{
                    textAlign: "center"
                }}>Redirecting you to the homepage in <span style={{ color: "black" }}>{timer} seconds</span></Typography>
            </Box>
        </div>
    );
}
