import {Paper} from '@mui/material';

type MovieCardProps = {
    poster: string;
}

function MovieCard({poster}: MovieCardProps) {
    return (
        <Paper component="a" href="/1" 
        sx={{
            width: '10rem'
        }}
        >
        <img src={poster}
            style={{
                width: '100%'
            }}
        /> 
        </Paper>
    )
}

export default MovieCard