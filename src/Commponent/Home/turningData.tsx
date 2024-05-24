import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import LayersIcon from "@mui/icons-material/LayersOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import BasicLineChart from "./lineChart";
import { IconButton } from "@mui/material";
import Image from "next/image";

const TurningData = () => {
  const iconContainer = {
    height: 80,
    width: 80,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const data = ["Instant insights", "AI technology", "Easy integration"];
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          background: "#F9F9F9",
          mt: 17,
          borderRadius: 15,
          pt: 7,
          position: "relative",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={5.85}>
            <Box pl={6}>
              <Typography variant="h3" sx={{ maxWidth: 500 }} mb={10} mt={3}>
                Turning data into real actions and ideas
              </Typography>
              {data.map((item) => (
                <Box key={item}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 5,
                    background: "#FFFFFF",
                    py: 1,
                    px: 2.5,
                    mb: 3,
                    maxWidth: 300,
                  }}
                >
                  <Typography variant="body1" fontSize={20}>
                    {item}
                  </Typography>
                  <Box>
                    <IconButton
                      sx={{ background: "#F9F9F9", width: 40, height: 40 }}
                    >
                      +
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6.15} alignItems="end">
            <Box
              sx={{
                background: "#000",
                padding: "20px 0 20px 20px",
                borderRadius: "40px 0 0 40px",
              }}
            >
              <Box width={712} height={637} position="relative">
                <Image
                  priority
                  src="/images/tablets.png"
                  alt="foretelll logo"
                  fill
                  style={{ borderRadius: "20px 0 0 20px", objectFit: "fill" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            background: "#000",
            padding: 0.5,
            borderRadius: 6,
            position: "absolute",
            bottom: "25%",
            right: "45%",
          }}
        >
          <Box width={212} height={442} position="relative">
            <Image
              priority
              src="/images/phone.png"
              alt="foretelll logo"
              fill
              style={{ borderRadius: 30, objectFit: "fill" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
        </Box>
        <Box
          className="graph-paper"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize={450} style={{ color: "#FB5030" }} variant="h1">
            Rainos
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TurningData;
