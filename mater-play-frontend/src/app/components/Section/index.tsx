import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";

const movies = [
    {poster: 'assets/house-of-dragons-poster.jpg'},
    {poster: 'assets/theBoyss.jpg'},
    {poster: 'assets/materia-escura.jpg'},
    {poster: 'assets/house-of-dragons-poster.jpg'},
    {poster: 'assets/house-of-dragons-poster.jpg'}
];

function Section() {
    return (
       <Box>
         <Container>
            <Typography variant="h6" sx={{fontWeight: 400, paddingTop: '2rem'}}>
                Para toda a família
            </Typography>
            <Stack direction="row" gap={0.5} sx={{ overflowY: 'hidden', whiteSpace: 'nowrap', paddingY: '1rem'}}>
                {movies.map(p => (
                    <MovieCard poster={p.poster}/>
                ))}
            </Stack>
         </Container>
       </Box>
    )
}

export default Section