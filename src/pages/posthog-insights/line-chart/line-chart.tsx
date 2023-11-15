// Charts Imports
import ReactApexcharts from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

// MUI Imports
import { Card, CardHeader, CardContent, useTheme, Theme } from "@mui/material";
import { RefreshOutlined } from "@mui/icons-material";
import { green, grey, blue, purple } from "@mui/material/colors";
import { LoadingButton } from "@mui/lab";

export function LineChart(props: LineChartProps) {
  // ** Props
  const { categories, series, loading, onRefresh, last_refresh, ...restProps } =
    props;

  const theme = useTheme();

  return (
    <>
      <Card {...restProps}>
        <CardHeader
          title="Trends"
          subheader={`Last refresh ${last_refresh.toLocaleString()}`}
          sx={{
            flexDirection: ["column", "row"],
            alignItems: ["flex-start", "center"],
            "& .MuiCardHeader-action": { mb: 0 },
            "& .MuiCardHeader-content": { mb: [2, 0] },
          }}
          action={
            <LoadingButton
              loading={loading}
              onClick={onRefresh}
              color="success"
              startIcon={<RefreshOutlined />}
            >
              refresh
            </LoadingButton>
          }
        />
        <CardContent>
          <ReactApexcharts
            type="line"
            height={400}
            series={series}
            options={options({ theme, categories })}
          />
        </CardContent>
      </Card>
    </>
  );
}

function options(options: Options): ApexOptions {
  // ** Params
  const { categories, theme } = options;

  return {
    chart: {
      parentHeightOffset: 0,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: ["#ff9f43", green[500], blue[500], purple[400]],
    stroke: { curve: "straight" },
    dataLabels: { enabled: false },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      colors: ["#ff9f43"],
      strokeColors: ["#fff", grey[100], grey[200], grey[300]],
    },
    grid: {
      padding: { top: -10 },
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: true },
      },
    },
    yaxis: {
      labels: {
        style: { colors: theme.palette.text.disabled },
      },
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: theme.palette.divider },
      crosshairs: {
        stroke: { color: theme.palette.divider },
      },
      labels: {
        style: { colors: theme.palette.text.disabled },
      },
      categories,
    },
  };
}

interface Options {
  theme: Theme;
  categories: string[];
}

interface LineChartProps {
  categories: string[];
  series: ApexOptions["series"];
  loading: boolean;
  onRefresh(): void;
  last_refresh: Date;
}