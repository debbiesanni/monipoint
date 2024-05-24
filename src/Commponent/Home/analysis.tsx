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

const Analytics = () => {
  const iconContainer = {
    height: 80,
    width: 80,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Container maxWidth="xl">
      <Box id="hero"
        sx={{ background: "#F9F9F9", mt: 17, borderRadius: 20, px: 3, py: 7 }}
      >
        <Grid container spacing={4} mb={6} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography ml={3} variant="h2">
              Your key to strategic success through analytics
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Typography
              variant="h6"
              sx={{ width: "100%", maxWidth: 320, textAlign: "center" }}
            >
              Ready for exiting, instantaneous all-accessible insights in real
              time
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                border: "solid 1px #EFEFEF",
                borderRadius: 7,
                background: "#FFFFFF",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box px={2} py={5} ml={3}>
                    <Button
                      sx={{
                        background: "#FED14A",
                        color: "#4E4425",
                        px: 2,
                        borderRadius: 3,
                        mt: 3,
                      }}
                    >
                      Setting up reports
                    </Button>
                    <Typography variant="h3" mb={5} mt={15} lineHeight={70}>
                      Fast and easy access to analytics
                    </Typography>
                    <Typography
                      variant="body1"
                      fontSize={22}
                      style={{ color: "#A4A4A4" }}
                    >
                      One platform is a comprehensive system of solutions that
                      will be the first step towards digitalization of your
                      business
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    mt={5}
                    sx={{
                      borderLeft: "solid 1px #EFEFEF",
                      borderTop: "solid 1px #EFEFEF",
                      borderTopLeftRadius: 20,
                      px: 3,
                    }}
                  >
                    <Typography variant="h6" pt={3}>
                      Sales statistic
                    </Typography>
                    <Box
                      mt={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          ...iconContainer,
                          height: 50,
                          width: 50,
                          background: "#FB5030",
                        }}
                      >
                        <LayersIcon htmlColor="#F2F2F2" sx={{ fontSize: 25 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "#CACACA", fontSize: 14 }}
                          fontWeight={600}
                        >
                          Total profit
                        </Typography>
                        <Typography variant="h5" mt={1} fontWeight={600}>
                          $ 264, 2K
                        </Typography>
                      </Box>
                      <Box
                        sx={{ background: "#F6F6F6", p: 2, borderRadius: 3 }}
                      >
                        <Typography variant="caption">Visitors</Typography>
                        <Box mt={1.5}>
                          <LinearProgress color="success" />
                        </Box>

                        <Box sx={{ display: "flex" }} mt={2}>
                          <Typography variant="h5">56K</Typography>
                          <Box
                            sx={{
                              ...iconContainer,
                              height: 20,
                              width: 20,
                              background: "#48C484",
                            }}
                          >
                            <ArrowUpwardOutlinedIcon
                              htmlColor="#fff"
                              sx={{ fontSize: 12 }}
                            />
                          </Box>
                          <Typography ml={1} variant="caption">
                            +14%
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        border: "solid 1px #EFEFEF",
                        borderRadius: 5,
                        position: "relative",
                      }}
                      my={3}
                    >
                      <Typography variant="h6" mt={2} ml={3}>
                        Visit Statistics
                      </Typography>
                      <BasicLineChart />
                      <Box
                        sx={{
                          width: 100,
                          background: "#FB5030",
                          p: 1.5,
                          borderRadius: 3,
                          position: "absolute",
                          right: 0,
                          bottom: 0,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="caption"
                            style={{ color: "#fff" }}
                          >
                            Rate
                          </Typography>
                          <LayersIcon
                            htmlColor="#F2F2F2"
                            sx={{ fontSize: 25 }}
                          />
                        </Box>
                        <Typography variant="h6" style={{ color: "#fff" }}>
                          +58%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ background: "#0D0D0D", borderRadius: 7, p: 4 }}>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      border: "solid 1px #2E2C2C",
                      background: "131111",
                      textAlign: "center",
                      borderRadius: 4,
                      p: 3,
                    }}
                  >
                    <LayersIcon htmlColor="#FDE15F" sx={{ fontSize: 50 }} />
                    <Box sx={{ p: 3, display: "flex" }}>
                      <Avatar
                        src="/images/avatar1.avif"
                        alt="logo"
                        sizes="small"
                      />
                      <Avatar
                        src="/images/avatar.jpg"
                        alt="logo"
                        sizes="small"
                        sx={{ ml: -1 }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      border: "solid 1px #2E2C2C",
                      background: "131111",
                      borderRadius: 4,
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="body1"
                      mb={2}
                      sx={{ color: "#E1E1E1" }}
                    >
                      Transaction
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                      <Box
                        sx={{
                          ...iconContainer,
                          height: 20,
                          width: 20,
                          background: "#48C484",
                        }}
                      >
                        <ArrowUpwardOutlinedIcon
                          htmlColor="#fff"
                          sx={{ fontSize: 15 }}
                        />
                      </Box>
                      <Typography
                        ml={1}
                        variant="caption"
                        sx={{ color: "#48C484" }}
                      >
                        +14%
                      </Typography>
                    </Box>
                    <Typography variant="h2" mt={2} sx={{ color: "#E1E1E1" }}>
                      43k
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="center" mt={8} mb={5.5}>
                <Box sx={{ maxWidth: 300, textAlign: "center" }}>
                  <Typography variant="h4" mb={2} sx={{ color: "#E1E1E1" }}>
                    Widget control
                  </Typography>
                  <Typography variant="body2" mb={2} sx={{ color: "#808080" }}>
                    Report provide a comprehensive overview of import aspect of
                    web analytics{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" my={7}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "end" }}>
              <Typography variant="body1" fontSize={16}>
                Up to
              </Typography>
              <Typography variant="h1">45%</Typography>
            </Box>
            <Typography variant="body1" sx={{ maxWidth: 500 }} ml={3}>
              Increase your analytics efficiency by upto 45%. Unique algorithms
              provide insights from data reduce time for analysis and save time
              for making important, informed decissions
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Analytics;
