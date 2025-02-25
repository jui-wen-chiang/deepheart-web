import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BaseCardLayout } from 'src/assets/styles/commonStyles'


const MyCard = () => {
    return (
        <BaseCardLayout sx={{ width: "200px", height: "100pxt" }}>
            <CardContent>
                <Typography variant="h3">MUI Styled Card</Typography>
            </CardContent>
        </BaseCardLayout>
    );
};

export default MyCard;