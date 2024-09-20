import { Box, Button, Container, Stack, Typography } from "@mui/material";

function HighLightSection() {
    return (
        <Box>
            <Container>
                <Stack direction="row">
                    <img src="assets/house-of-dragons-poster.jpg" />
                    <Stack sx={{
                        justifyContent: 'center',
                        paddingLeft: '3rem'
                    }}>
                        <Typography variant="h4">A Casa dos Pênizes</Typography>
                        <Typography variant="subtitle2">
                            <span style={{
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                padding: '0.2rem',
                                marginRight: '0.3rem'
                                
                            }}>
                                16
                            </span>
                            Aventura, Fantasia, Ação
                        </Typography>
                        <Typography variant="subtitle1" sx={{
                            paddingTop: '2rem',
                            marginBottom: '0.5rem'
                        }}>
                            Sinopse
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde totam facilis eos, harum exercitationem distinctio ullam iure ad quos rem quas nostrum est amet necessitatibus quaerat esse, tenetur veniam minus!
                        </Typography>
                        <Stack direction="row" gap={1} sx={{
                            paddingY: '1rem'
                        }}
                    >
                            <Button variant="outlined"  >Assistir Big Black Cock</Button>
                            <Button variant="outlined">Detallhes</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default HighLightSection;