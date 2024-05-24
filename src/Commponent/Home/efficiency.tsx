import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useEffect, useRef } from "react";

const Efficiency = () => {
  const iconContainer = {
    height: 120,
    width: 120,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ px: 5, mt: 12 }}>

        <Typography mt={1} ml={3} variant="h1">
          Maximize <span style={{ color: "#CCCCCC" }}>efficiency</span>
        </Typography>
        <Typography ml={3} variant="h1">
          With our intuitive
        </Typography>
        <Grid container spacing={4} alignItems="center" px={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  ...iconContainer,
                  background: "#F2F2F2",
                  mr: -2,
                  zIndex: 1,
                }}
              >
                <Box component="span" sx={{ color: "#FB5030", mt: -1 }}>
                  .......
                </Box>
                <Box
                  component="span"
                  sx={{
                    background: "#FB5030",
                    borderRadius: 2,
                    py: 0.4,
                    px: 0.8,
                  }}
                >
                  <StackedLineChartOutlinedIcon
                    htmlColor="#fff"
                    sx={{ fontSize: 15, transform: "rotate(30deg)" }}
                  />
                </Box>
                <Box component="span" sx={{ color: "#FB5030", mt: -1 }}>
                  .......
                </Box>
              </Box>

              <Box sx={{ ...iconContainer, background: "#FED14A" }}>
                <Box textAlign="center">
                  <Typography variant="h4">45%</Typography>
                  <Typography variant="caption">
                    system grows <br /> faster
                  </Typography>
                  <Typography variant="caption"></Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} display="flex" justifyContent="end">
            <Box
              sx={{
                background: "#FED14A",
                width: 450,
                height: 130,
                borderRadius: 20,
                py: 1,
                overflow: "hidden",
              }}
            >
              <Typography ml={3} variant="h1">
                Analysis service
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 6 }} />

        <Grid container spacing={4} alignItems="center" py={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              Explore traffic sources, page behavior, conversions and more to
              gain deep insight into your audience with us, your business
              doesn&apos;t just adapt - it evolves
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="end">
            <Button
              sx={{
                background: "#F2F2F2",
                color: "#333",
                px: 2,
                mr: 2,
                borderRadius: 3,
              }}
            >
              Request a demo
            </Button>
            <Button
              sx={{
                background: "#FB5030",
                color: "#fff",
                px: 2,
                borderRadius: 3,
              }}
            >
              start for free
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Efficiency;
