import ExerciseCard from "../components/ExerciseCard"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"


// The container centers the content horizontally.
const Results = () => <Container maxWidth="xl">
<Box marginTop={3} sx={{display: "flex"}}>
    
    <Grid container spacing={4}>
        <Grid item xs={3}>
            <ExerciseCard />
        </Grid>
        <Grid item xs={3}>
            <ExerciseCard />
        </Grid>
        <Grid item xs={3}>
            <ExerciseCard />
        </Grid>
        <Grid item xs={3}>
            <ExerciseCard />
        </Grid>
    </Grid>
</Box>

</Container>

export default Results;