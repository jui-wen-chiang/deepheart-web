import * as React from 'react';

import { Container, Box, Button } from 'src/components/mui';

import TwoLevelPieChart from 'src/components/charts/pie'
import PieChart from 'src/components/charts/pie2'
import PositiveAndNegativeBarChart from 'src/components/charts/bar'
import RadarChart from 'src/components/charts/radar'
import { LineChart } from "@mui/x-charts/LineChart";

import { pagelayout, basicCenterlayout, twoColslayout, leftColumn, rightColumn } from 'src/assets/styles/commonStyles'


export default function HomePage() {
  return (
    <Container sx={pagelayout}>
      <Box sx={basicCenterlayout}>
        <h1>Homepage</h1>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Button variant="contained">Contained</Button>
      </Box>

      <Box sx={{ ...basicCenterlayout, height: "100vh", width: "100%" }}>
        <RadarChart />
      </Box>

      <Box sx={twoColslayout}>
        <Box sx={rightColumn}>
          <h2>2week Emotion Pie</h2>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Box>
        <Box sx={{ ...leftColumn, height: "100vh", width: "100%" }}>
          <PieChart />
        </Box>
      </Box>

      <Box sx={{ height: "300px", width: "100%" }}>
        <h2>Trend</h2>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
        />
      </Box>
    </Container>
  )
}