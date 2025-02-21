import { Dialog, DialogTitle, DialogContent, DialogActions, Box, Button } from 'src/components/mui';
import RadarChart from 'src/components/charts/radar'
import { pagelayout, basicCenterlayout, twoColslayout, leftColumn, rightColumn } from 'src/assets/styles/commonStyles'


export default function ModalDialog({ open, handleClose, title, children }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <h2>{children}</h2>
                <Box sx={{ ...basicCenterlayout, height: "80vh", width: "100vh" }}>
                    <RadarChart />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>關閉</Button>
            </DialogActions>
        </Dialog>
    );
}
