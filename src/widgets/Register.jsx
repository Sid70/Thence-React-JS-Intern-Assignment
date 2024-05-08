import React, { useState } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import Image from '../images/Brunel_logo.png';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import "../components/mainpage/style.css";
import Icon from '../images/Badges.png';

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleRedirectHome = () => {
        navigate('/'); // Navigate to the home page
    };

    const handleSubmit = () => {
        if (!isValidEmail(email)) {
            setEmailError('Enter a valid email address');
        }
        else {
            setEmailError('');
            navigate("/success")
        }
    };

    const isSubmitDisabled = () => {
        return name.trim() === '' || email.trim() === '';
    };

    const isValidEmail = (value) => {
        // Simple email validation using regex
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(value);
    };

    return (
        <div>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: "1rem 2rem"
            }}>
                <Box>
                    <img src={Image} alt="Menu" width={"70px"} />
                </Box>

                <IconButton onClick={handleRedirectHome}>
                    <CancelIcon sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        bgcolor: "black",
                        border: "none",
                        borderRadius: "50%"
                    }} />
                </IconButton>
            </Box>
            <Box sx={{
                width: "40%",
                textAlign: "center",
                mt: 2,
                m: "auto"
            }}>
                <Typography variant='h4' fontFamily={"Covered By Your Grace"} color={"#2DA950"}>Registration Form</Typography>
                <Typography variant='h3'>Start your success Journey here!</Typography>

                <Box sx={{ width: "100%", m: "auto", mt: 3 }}>
                    <input type="text" placeholder="Enter your name" style={{ width: "60%", padding: "1.5rem", borderRadius: "10rem", backgroundColor: "#EFEFEF", border: "1px solid #EFEFEF", fontSize: "1rem" }} value={name} onChange={(e) => setName(e.target.value)} />
                </Box>
                <Box sx={{ width: "100%", m: "auto", mt: 3 }}>
                    <input type="email" placeholder="Enter your email" style={{ width: "60%", padding: "1.5rem", borderRadius: "10rem", backgroundColor: "#EFEFEF", border: `1px solid ${emailError ? 'red' : '#EFEFEF'}`, fontSize: "1rem" }} value={email} onChange={(e) => setEmail(e.target.value)} />

                    {emailError && (
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: '5.5rem', mt: 2 }}>
                            <img src={Icon} alt="Info Icon" width="20px" />
                            <Typography sx={{ color: 'red' }}>{emailError}</Typography>
                        </Box>
                    )}
                </Box>
                <Box sx={{ width: "100%", m: "auto", mt: 3 }}>
                    <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: "70%", padding: "1rem", borderRadius: "10rem", backgroundColor: "black", border: "1px solid #C9C9C9", textTransform: "capitalize" }} disabled={isSubmitDisabled()}>Submit</Button>
                </Box>
            </Box>
        </div>
    );
}
