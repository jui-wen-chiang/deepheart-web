import * as React from 'react';
import { useState } from "react";

import { Container, Box, Button } from 'src/components/mui';

import { LineChart } from "@mui/x-charts/LineChart";
import ModalDialog from 'src/components/tools/emtionDialog'

import { PageContainer, BasicBox, TwoColsBox, leftColumn, rightColumn } from 'src/assets/styles/commonStyles'


export default function HomePage() {
  const [activeDialog, setActiveDialog] = useState(null);


  return (
    <PageContainer>
      <BasicBox>
        <h1>Homepage</h1>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <Button variant="contained" onClick={() => setActiveDialog("input_feel")}>
          Input Feel
        </Button>
      </BasicBox>

      {/* <ModalDialog
        open={activeDialog === "input_feel"}
        handleClose={() => setActiveDialog(null)}
        title="Your Feel">
        <p>這是children內容。</p>
      </ModalDialog> */}


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

      {/* <Box sx={{ ...basicCenterlayout, height: "100vh", width: "100%" }}>
        <RadarChart />
      </Box> */}

      <TwoColsBox>
        <Box sx={rightColumn}>
          <h2>2week Emotion Pie</h2>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Box>
        <Box sx={{ ...leftColumn, height: "100vh", width: "100%" }}>
          {/* <PieChart /> */}
        </Box>
      </TwoColsBox>


    </PageContainer>
  )
}