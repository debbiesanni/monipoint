import Box from "@mui/material/Box";
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

const GetStarted = () => {
  const iconContainer = {
    height: 80,
    width: 80,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#FB5030",
  };
  return (
    <Container maxWidth="xl">
      <Box sx={{ px: 5, mt: 12, }}>
        <Box sx={{
                  display: "flex",
                  justifyContent: "center",}}>
        <Box sx={iconContainer}>
            <HdrStrongIcon sx={{color: "#fff", fontSize: 50}}/>
        </Box></Box>
                <Typography variant="h1" textAlign="center" mt={4}>
                  Get Started
                </Typography>
                <Box mt={4} sx={{
                  display: "flex",
                  justifyContent: "center"}}>
                <Typography variant="h6" sx={{maxWidth: 450, color: "#999", textAlign: "center"}}>
                  Turn information into advantage! Start using Romas today. Sign up for free trial
                </Typography></Box>
<Box textAlign="center" mt={4}><Button sx={{background: "#F9F9F9", px: 3, borderRadius: 2, color: "#333", mr: 2}}>Request a demo</Button><Button sx={{borderRadius: 2, color: "#fff", background: "#FB5030", px: 3}}>Start for free</Button></Box>
             
      </Box>
    </Container>
  );
};

export default GetStarted;
