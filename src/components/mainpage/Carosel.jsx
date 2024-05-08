import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from '../../images/Group.png'
import Arrow from '../../images/Vector.png'
import BG from '../../images/back.png'

export default function TextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 3;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 10000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [maxSteps]);
  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Box sx={{
        width: "558px",
        margin: "auto"
      }}>
        <Typography variant='h4' sx={{
          fontFamily: "Covered By Your Grace",
          textAlign: "center",
          pt: "3rem",
          color: "#2DA950"
        }}>
          Success stories
        </Typography>
        <Typography variant='h3' sx={{
          textAlign: "center",

        }}>
          Every success journey we’ve encountered.
        </Typography>
      </Box>
      <img src={BG} alt="" style={{ position: "absolute", right: 0 }} />
      <Box sx={{
        mt: "3rem",
        display: "flex",
        flexDirection: { xs: 'column', sm: 'row' }, // Change direction based on screen size
        alignItems: "center",
        width: "100%",
      }}>
        <img src={Image} alt="" width={{ xs: '100%', sm: '50%' }} /> {/* Adjust width based on screen size */}
        <Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            p: { xs: '1rem', sm: '2rem' }, // Adjust padding based on screen size
            ml: { xs: 0, sm: '1rem' }, // Add margin only on larger screens
          }}>
            <Typography variant='h4' width={{ xs: '100%', sm: "398px" }} sx={{ // Adjust width based on screen size
              mt: { xs: '1rem', sm: '1rem' }, // Adjust margin top based on screen size
              mb: { xs: '1rem', sm: 0 }, // Add margin bottom only on smaller screens
            }}>
              Enhance fortune 50 company’s insights teams research capabilities
            </Typography>

            <Box sx={{
              mt: "1.5rem",
              ml: "-0.6rem",
            }}>
              <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                color='green'
                sx={{
                  '.MuiMobileStepper-dot': {
                    backgroundColor: '#E4E3E3', // Reset dot color
                  },
                  '.MuiMobileStepper-dotActive': {
                    backgroundColor: 'green', // Set active dot color to green
                  },
                }}
              />
            </Box>

            <Box sx={{
              mt: { xs: '2rem', sm: '9rem' }, // Adjust margin top based on screen size
              textAlign: "left",
              ml: "0.5rem"
            }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  textTransform: "capitalize",
                  p: "1rem 2rem",
                  background: `linear-gradient(97.55deg, #1C1C1C 2.63%, #454444 105.2%), linear-gradient(0deg, #4E4E4E, #4E4E4E)`,
                  '&:hover': {
                    background: `linear-gradient(97.55deg, #454444 2.63%, #1C1C1C 105.2%), linear-gradient(0deg, #4E4E4E, #4E4E4E)`,
                  },
                }}
              >
                Explore more
                <img src={Arrow} alt="" style={{ marginLeft: "0.5rem" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
