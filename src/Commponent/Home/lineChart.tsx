import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 3, 7, 5.5, 8.5, 10],
        },
      ]}
      sx={{
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          display: "none",
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
          fill: "#dbdbdb",
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          display: "none",
        },
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          display: "none",
        },
      }}
      width={400}
      height={180}
    />
  );
}
