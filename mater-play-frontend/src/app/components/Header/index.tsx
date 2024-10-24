import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from "@mui/material"

const MenuButton = styled(Button)({
    color: '#FFF'
})

function Header() {
    return (
       <AppBar>
            <Container>
                <Toolbar>
                    <Typography variant="h6">
                        Pênis Play  
                    </Typography>
                    <Box
                        sx={{
                            paddingLeft: '1rem'
                        }}>
                        <MenuButton variant="text">Pênis</MenuButton>
                        <MenuButton variant="text">Poronga</MenuButton>
                        <MenuButton variant="text">Cock</MenuButton>
                    </Box>
                </Toolbar>
            </Container>
       </AppBar>
    )
}

export default Header