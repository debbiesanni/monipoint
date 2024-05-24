import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const HeroSection = () => {


  return (
    <Container maxWidth="xl">
      <Box sx={{ px: 5, mt: 12 }}  className="hero" >
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Box sx={{width: 150}}>
                <Image
                  priority
                  src="/images/icon1.png"
                  alt="icon 1"
                  height={80}
                  width={80}
                  className="icon1"
                />

<Image
                  priority
                  src="/images/icon2.png"
                  alt="icon 2"
                  height={80}
                  width={80}
                  className="icon1"
                  style={{marginLeft: -20}}
                />
                </Box>
                <Typography ml={3} variant="h1">
                  Analytics
                </Typography>
              </Box>
              <Typography mt={1} ml={3} variant="h1">
                that <span style={{ color: "#CCCCCC" }}>helps</span> you
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box position="relative">
              <Box width={430} height={250} position="relative">
                <Image
                  priority
                  src="/images/heroImage.png"
                  alt="foretelll logo"
                  fill
                  style={{ borderRadius: 20, objectFit: "cover"}}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="labtop"
                />
              </Box>

              <PlayCircleFilledIcon
                htmlColor="#FB5030"
                className="play"
                sx={{ position: "absolute", left: -20, top: -20 }}
              />
            </Box>
          </Grid>
        </Grid>
        <Typography
          mt={1.5}
          variant="h1"
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
          ml={3}
        >
          Shape
          <Box sx={{width: 100, textAlign: "center"}}>
                <Image
                  priority
                  src="/images/icon3.png"
                  alt="icon 1"
                  height={80}
                  width={80}
                  className="shapeIcon"
                /></Box>
          the future{" "}
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;
