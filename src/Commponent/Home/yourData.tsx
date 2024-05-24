import LinearProgress from "@mui/material/LinearProgress";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TimelineIcon from "@mui/icons-material/Timeline";
import BarChartIcon from "@mui/icons-material/BarChart";
import Divider from "@mui/material/Divider";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import BoltIcon from "@mui/icons-material/Bolt";
import { Button } from "@mui/material";

const YourData = () => {
  const iconContainer = {
    height: 50,
    width: 50,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 17, px: 3, py: 7 }}>
        <Typography mt={1} ml={3} variant="h1">
          We give you full
        </Typography>
        <Typography mt={1} ml={3} variant="h1">
          <span style={{ color: "#CCCCCC" }}>control</span> over your data
        </Typography>
        <Grid container spacing={4} mb={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ background: "#F9F9F9", mt: 17, borderRadius: 10 }}>
              <Box
                className="graph-paper2"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={9}
              >
                <Box
                  sx={{
                    maxWidth: 300,
                    background: "#fff",
                    py: 6,
                    px: 6,
                    borderRadius: 5,
                    border: "solid 1px #eeeeee",
                    boxShadow: "20px 10px 50px 15px #dbdbdb",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      mb={2}
                      fontWeight={700}
                      textAlign="center"
                    >
                      Conversion rate
                    </Typography>
                    <Box
                      p={3}
                      mb={4}
                      sx={{
                        background: "#FED14A",
                        borderRadius: 5,
                        position: "relative",
                      }}
                    >
                      <Typography variant="h2" textAlign="center">
                        2.3%
                      </Typography>
                      <Box
                        component="span"
                        sx={{
                          ...iconContainer,
                          background: "#F9F9F9",
                          borderRadius: "50%",
                          position: "absolute",
                          top: -20,
                          left: -20,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            ...iconContainer,
                            background: "#fff",
                            borderRadius: "50%",
                            height: 35,
                            width: 35,
                          }}
                        >
                          <TimelineIcon sx={{ fontSize: 10 }} />
                          <Box component="span">
                            <BarChartIcon sx={{ fontSize: 8 }} />
                            <BarChartIcon sx={{ fontSize: 8 }} />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        variant="body1"
                        maxWidth={140}
                        textAlign="center"
                      >
                        Percentage of website visitors
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: 350,
                    background: "#fff",
                    p: 3,
                    borderRadius: 5,
                    border: "solid 1px #eeeeee",
                    boxShadow: "20px 10px 50px 15px #dbdbdb",
                    mt: 15,
                    ml: -4,
                  }}
                >
                  <Box>
                    <Typography variant="h6" mb={2} fontWeight={700}>
                      Sales revenue
                    </Typography>
                    <Typography variant="h3" style={{ fontSize: 27 }}>
                      $ 131,2k
                    </Typography>
                    <Box
                      my={2}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <LinearProgress
                        color="success"
                        sx={{ width: "32%", borderRadius: 7 }}
                      />
                      <LinearProgress
                        color="warning"
                        sx={{ width: "32%", borderRadius: 7 }}
                      />
                      <LinearProgress
                        color="success"
                        sx={{ width: "32%", borderRadius: 7 }}
                      />
                      <Box></Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 4,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src="/images/avatar1.avif"
                          alt="logo"
                          sizes="small"
                        />
                        <Typography variant="body1" ml={2} fontWeight={500}>
                          Min. price
                        </Typography>
                      </Box>
                      <Typography variant="body1" fontWeight={700}>
                        1,200 $
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      mt={3}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src="/images/avatar.jpg"
                          alt="logo"
                          sizes="small"
                        />
                        <Typography variant="body1" ml={2} fontWeight={500}>
                          Max. price
                        </Typography>
                      </Box>
                      <Typography variant="body1" fontWeight={700}>
                        2,300 $
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 3 }} />
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <Typography variant="body1" fontWeight={500}>
                        Engagment rate
                      </Typography>
                      <Typography variant="body1" ml={2} fontWeight={500}>
                        Max. price
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                mt={4.5}
                pb={6}
                px={2}
              >
                <Box>
                  <Typography variant="h3" my={3} textAlign="center">
                    Improved customer service
                  </Typography>
                  <Typography
                    textAlign="center"
                    variant="h4"
                    sx={{ maxWidth: 700, fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Analytics helps optimize service proccesses by providing
                    information on how to improve interractions with customers
                    and increate satisfaction
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} alignItems="center">
            <Box sx={{ background: "#F9F9F9", mt: 17, borderRadius: 10 }}>
              <Box
                className="graph-paper2"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                p={9}
              >
                <Box
                  sx={{
                    width: 360,
                    background: "#fff",
                    borderRadius: 4,
                    border: "solid 1px #eee",
                    py: 4,
                  }}
                ></Box>
                <Box
                  sx={{
                    width: 450,
                    background: "#fff",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    border: "solid 1px #eee",
                    mt: -4,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center",  py: 2}}>
                    <Box
                      component="span"
                      sx={{
                        ml: 2,
                        height: 35,
                        width: 35,
                        background: "#eee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                      }}
                    >
                      <WorkspacesIcon sx={{ color: "#333" }} />
                    </Box>
                    <Typography ml={1} variant="h5">
                      Finance reports
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: 550,
                    background: "#fff",
                    borderRadius: 5,
                    border: "solid 1px #eee",
                    mt: -1,
                  }}
                >
                  <Box sx={{display: "flex",
                    alignItems: "center", py: 2}}>
                  <Box
                    component="span"
                    sx={{
                      ml: 2,
                      height: 35,
                      width: 35,
                      background: "#eee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                    }}
                  >
                    <BoltIcon sx={{ color: "#333" }} />
                  </Box>
                  <Typography ml={1} variant="h5">
                    Insight
                  </Typography></Box>
                <Grid container>
                  <Grid item xs={12} md={5}>
                  <Typography variant="h6" ml={3} mt={7} mb={1}>
                    Total profit
                  </Typography>
                  <Typography variant="h3" ml={3} mb={3}>
                    $ 264,2K
                  </Typography>
                    <Button sx={{mb: 2, background: "#FED14A", px: 2, ml: 3, py: 1, borderRadius: 3}}>Data visualization</Button>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box mt={11} sx={{display: "flex", alignItems: "end"}}>
                      <Box>   
                        <Box component="span" sx={{padding: "50px 20px", background: "#F2F2F2", borderRadius: 2, mr: 3}}></Box><br/>
                        <Box  sx={{ color: "#dbdbdb", mt: 7.5}}>2022</Box>
                      </Box>
                   <Box>
                      <Box component="span" sx={{padding: "20px 20px", background: "#F2F2F2", borderRadius: 2, mr: 3}}></Box><br/>
                        <Box sx={{ color: "#dbdbdb", mt: 3.5}}>2022</Box>
                      </Box>
                      <Box>
                      <Box component="span" sx={{padding: "50px 20px", background: "#F2F2F2", borderRadius: 2, mr: 3}}></Box><br/>
                        <Box sx={{ color: "#dbdbdb", mt: 7.5}}>2022</Box>
                      </Box>
                      <Box>
                      <Box component="span" sx={{padding: "70px 20px", background: "#FED14A", borderRadius: 2, mr: 3}}></Box><br/>
                        <Box sx={{ color: "#dbdbdb", mt: 9.5}}>2022</Box>
                      </Box>
                      <Box>
                      <Box component="span" sx={{padding: "30px 20px", background: "#F2F2F2", borderRadius: 2, mr: 3}}></Box><br/>
                        <Box sx={{ color: "#dbdbdb", mt: 4.5}}>2022</Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                mt={4.5}
                pb={6}
                px={2}
              >
                <Box>
                  <Typography variant="h3" my={3} textAlign="center">
                    Monitoring key indicators
                  </Typography>
                  <Typography
                    textAlign="center"
                    variant="h4"
                    sx={{ maxWidth: 600, fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Analytics platforms allow buinesses to track KPIs, an
                    important tool for measuring success and achieving goals.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default YourData;
