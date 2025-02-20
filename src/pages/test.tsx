import * as React from 'react';

import { Container, Box, Button } from 'src/components/mui';
import TwoLevelPieChart from 'src/components/charts/pie'
import PositiveAndNegativeBarChart from 'src/components/charts/bar'

import RadarChart from 'src/components/charts/radar'
import PieChart from 'src/components/charts/pie2'

import { LineChart } from "@mui/x-charts/LineChart";

import { pagelayout, basicCenterlayout, twoColslayout, leftColumn, rightColumn } from 'src/assets/styles/commonStyles'


export default function TestPage() {
    return (
        <Container sx={{ width: "100%", height: "100%" }}>
            <Box sx={twoColslayout}>
                <Box sx={rightColumn}>
                    <h2>Emotion Pie</h2>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </Box>
                <Box sx={{ ...leftColumn, height: "100vh", width: "100%" }}>
                    <PieChart/>
                </Box>
            </Box>
        </Container>
    )
}