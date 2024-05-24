import Box from "@mui/material/Box";
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Divider, Grid } from "@mui/material";
import Image from "next/image";

const Footer = () => {
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
      <Box sx={{ px: 2, mt: 12, background: "#0D0D0D", pt: 4 }}>
        <Container maxWidth="xl">
        <Grid container alignItems="center" mt={6}>
            <Grid item xs={12} md={6}>
                <Button sx={{color: "#999", fontSize: 25, mr: 3}}>About</Button>
                <Button sx={{color: "#999", fontSize: 25, mr: 3}}>Why Us</Button>
                <Button sx={{color: "#999", fontSize: 25, mr: 3}}>Platform</Button>
                <Button sx={{color: "#999", fontSize: 25, mr: 3}}>Pricing</Button>
                <Button sx={{color: "#999", fontSize: 25, mr: 3}}>Contacts</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h2" textAlign="right" mt={4}>
                  hello@ramos.com
                </Typography>
                </Grid>
        </Grid>
        <Divider sx={{background: "#999", my: 5}}/>
       
        <Grid container alignItems="center" mt={6}>
            <Grid item xs={12} md={3}>
                
                <Typography variant="h5" sx={{color: "#fff", mb: 0.5}}>
                  Warrensville Heights
                </Typography>
                <Typography variant="h6" sx={{color: "#999"}}>
                  14418 Vineyard Drive, NC 
                </Typography>
                <Typography variant="h6" sx={{color: "#999"}}>
                  44128
                </Typography>
                </Grid>
            <Grid item xs={12} md={3}>
                
                <Typography variant="h5" sx={{color: "#fff", mb: 0.5}}>
                  Saint Louis
                </Typography>
                <Typography variant="h6" sx={{color: "#999"}}>
                  1366 Penn Street 
                </Typography>
                <Typography variant="h6" sx={{color: "#999"}}>
                  63101
                </Typography>
                </Grid>
            <Grid item xs={12} md={6}>
                
                <Typography variant="h5" sx={{color: "#fff", mb: 2, textAlign: "right", fontSize: 18}}>
                  Linkedin
                </Typography>
                <Typography variant="h5" sx={{color: "#fff", mb: 2, textAlign: "right", fontSize: 18}}>
                  Instagram
                </Typography>
                <Typography variant="h5" sx={{color: "#fff", mb: 2, textAlign: "right", fontSize: 18}}>
                  Facebook
                </Typography>
                </Grid>
                </Grid>
                
        <Grid container alignItems="center" mt={6} pb={8}>
            <Grid item xs={12} md={6}>
              <Box width={567} height={132} position="relative">
                <Image
                  priority
                  src="/images/footer.png"
                  alt="logo"
                  fill
                  style={{ borderRadius: 20, objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
              </Grid>
            <Grid item xs={12} md={3} display="flex" justifyContent="space-between">
                <Typography variant="h6" sx={{color: "#999"}}>
                  Privacy policy
                </Typography>
                <Typography variant="h6" sx={{color: "#999"}}>
                  License agreement
                </Typography>
            </Grid>
            <Grid item xs={12} md={3} display="flex" justifyContent="flex-end">
              <Box width={138} height={138} position="relative">
                <Image
                  priority
                  src="/images/code.png"
                  alt="logo"
                  fill
                  style={{ borderRadius: 20, objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
              </Grid>
              </Grid>
            </Container>
      </Box>
  );
};

export default Footer;
