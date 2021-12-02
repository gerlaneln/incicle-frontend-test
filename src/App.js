import './App.css';
import React from 'react';
import { Typography, Avatar, AppBar, Stack, Dialog, Tooltip, DialogTitle, List, ListItem, ListItemAvatar, Alert, AlertTitle, Button, Card, CardActions, CardActionArea, CardContent, CardMedia,  CssBaseline, FormControl, Grid, Select, MenuItem, Toolbar, Container} from '@material-ui/core';
import { MoreHoriz, Public } from '@material-ui/icons';


const App = () => {

    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    function SimpleDialog(props){
        const{ onClose, open } = props;

        const handleClose = () => { onClose() };

        return (
            <Dialog onClose={handleClose} open={open}>
               <DialogTitle>Convidados</DialogTitle>
               <List sx={{ pt: 0 }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Kenedy Morais" src="https://avatars.githubusercontent.com/u/10067450?s=120&v=4" sx={{ width: 56, height: 56 }} />
                                <Stack direction="column">
                                    <Typography variant="button" display="block">
                                        Kenedy Morais
                                    </Typography>
                                    <Typography variant="overline" display="block">
                                        @eitatwo
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Não confirmado
                                    </Typography>
                                </Stack>
                                
                            </Stack>

                        </ListItemAvatar>
                    </ListItem>
                </List> 
            </Dialog>
        )
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <CssBaseline/>
            <AppBar position="relative" style={{ background: '#ebebeb' }}>
                <Toolbar>
                    <img className="logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQG5yZ5xRYkWfA/company-logo_200_200/0/1625164961092?e=1646265600&v=beta&t=tsNrJYu8BkKIAlo2AhUgVTL9ZKTgTaCU4M37sGle3Go" />
                    <Typography variant="h4" className="nome">
                        InCicle™
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className="container">
                    <Container maxWidth="xl">

                        <Grid container spacing={3} justify="space-between" alignItems="baseline">
                            <Grid item xs={12} sm={9}>

                                <div className="headerContent">
                                    <Stack direction="row">

                                        <Typography variant="h5">Endomarketing</Typography>

                                        <Grid container direction="row" justifyContent="flex-end">
                                            <Grid item>
                                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                    <Select
                                                        value={type}
                                                        onChange={handleChange}
                                                        displayEmpty
                                                    >
                                                        <MenuItem value="">
                                                            <em>Tipo</em>
                                                        </MenuItem>
                                                        <MenuItem value={"event"}>Evento</MenuItem>
                                                        <MenuItem value={"release"}>Comunicado</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <Button variant="contained" disableElevation>
                                                    Criar +
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                </div>

                                <div className="mainContent">
                                    <Card className="card">
                                        <CardActionArea>
                                            <Grid container direction="row" spacing={3} justify="space-between">
                                                <Grid item xs={12} sm={1}>
                                                    <CardMedia
                                                        component="img"
                                                        height="60"
                                                        width="60"
                                                        image="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                                                        alt="Cubo vermelho, com pontos brancos em um fundo escuro"
                                                    />
                                                </Grid>
                                                <Grid item xs={9} sm={10}>
                                                    <CardContent>
                                                        <Typography variant="h6" component="div">
                                                            Geral dispensado para curtir o feriado
                                                        </Typography>
                                                        <div>
                                                            <a href="#" className="linkType comunicado">Comunicado</a>

                                                            <label>15 OUT</label>

                                                        </div>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindut...
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                <Grid item xs={2} sm={1}>
                                                    <CardActions>
                                                        <Tooltip title="Mais" placement="right-end">
                                                            <Button>
                                                                <MoreHoriz className="moreButton" fontSize="large" />
                                                            </Button>
                                                        </Tooltip>
                                                    </CardActions>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>

                                    <Card className="card">
                                        <CardActionArea>
                                            <Grid container direction="row" spacing={3} justify="space-between">
                                                <Grid item xs={12} sm={1}>
                                                    <CardMedia
                                                        component="img"
                                                        height="60"
                                                        width="60"
                                                        image="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                                                        alt="Cubo vermelho, com pontos brancos em um fundo escuro"
                                                    />
                                                </Grid>
                                                <Grid item xs={9} sm={10}>
                                                    <CardContent>
                                                        <Typography variant="h6" component="div">
                                                            Almoço do dia do desenvolvedor
                                                        </Typography>
                                                        <div>
                                                            <a href="#" className="linkType evento">Evento</a>

                                                            <label>Local</label>
                                                            |
                                                            <label>15 OUT</label>
                                                            |
                                                            <Button variant="text" onClick={handleClickOpen}>Convidados</Button>

                                                            <SimpleDialog open={open} onClose={handleClose} />

                                                        </div>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindut...
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                <Grid item xs={2} sm={1}>
                                                    <CardActions>
                                                        <Tooltip title="Mais" placement="right-end">
                                                            <Button>
                                                                <MoreHoriz className="moreButton" fontSize="large" />
                                                            </Button>
                                                        </Tooltip>
                                                    </CardActions>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>

                                    <Card className="card">
                                        <CardActionArea>
                                            <Grid container direction="row" spacing={3} justify="space-between">
                                                <Grid item xs={12} sm={1}>
                                                    <CardMedia
                                                        component="img"
                                                        height="60"
                                                        width="60"
                                                        image="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                                                        alt="Cubo vermelho, com pontos brancos em um fundo escuro"
                                                    />
                                                </Grid>
                                                <Grid item xs={9} sm={10}>
                                                    <CardContent>
                                                        <Typography variant="h6" component="div">
                                                            Geral dispensado para curtir o feriado
                                                        </Typography>
                                                        <div>
                                                            <a href="#" className="linkType comunicado">Comunicado</a>

                                                            <label>15 OUT</label>

                                                        </div>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindut...
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                <Grid item xs={2} sm={1}>
                                                    <CardActions>
                                                        <Tooltip title="Mais" placement="right-end">
                                                            <Button>
                                                                <MoreHoriz className="moreButton" fontSize="large" />
                                                            </Button>
                                                        </Tooltip>
                                                    </CardActions>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>

                                    <Card className="card">
                                        <CardActionArea>
                                            <Grid container direction="row" spacing={3} justify="space-between">
                                                <Grid item xs={12} sm={1}>
                                                    <CardMedia
                                                        component="img"
                                                        height="60"
                                                        width="60"
                                                        image="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                                                        alt="Cubo vermelho, com pontos brancos em um fundo escuro"
                                                    />
                                                </Grid>
                                                <Grid item xs={9} sm={10}>
                                                    <CardContent>
                                                        <Typography variant="h6" component="div">
                                                            Almoço do dia do desenvolvedor
                                                        </Typography>
                                                        <div>
                                                            <a href="#" className="linkType evento">Evento</a>

                                                            <label>Local</label>
                                                            |
                                                            <label>15 OUT</label>
                                                            |
                                                            <Button variant="text" onClick={handleClickOpen}>Convidados</Button>

                                                            <SimpleDialog open={open} onClose={handleClose} />

                                                        </div>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindut...
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                <Grid item xs={2} sm={1}>
                                                    <CardActions>
                                                        <Tooltip title="Mais" placement="right-end">
                                                            <Button>
                                                                <MoreHoriz className="moreButton" fontSize="large" />
                                                            </Button>
                                                        </Tooltip>
                                                    </CardActions>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>

                                    <Card className="card">
                                        <CardActionArea>
                                            <Grid container direction="row" spacing={3} justify="space-between">
                                                <Grid item xs={12} sm={1}>
                                                    <CardMedia
                                                        component="img"
                                                        height="60"
                                                        width="60"
                                                        image="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                                                        alt="Cubo vermelho, com pontos brancos em um fundo escuro"
                                                    />
                                                </Grid>
                                                <Grid item xs={9} sm={10}>
                                                    <CardContent>
                                                        <Typography variant="h6" component="div">
                                                            Geral dispensado para curtir o feriado
                                                        </Typography>
                                                        <div>
                                                            <a href="#" className="linkType comunicado">Comunicado</a>

                                                            <label>15 OUT</label>

                                                        </div>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindut...
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                <Grid item xs={2} sm={1}>
                                                    <CardActions>
                                                        <Tooltip title="Mais" placement="right-end">
                                                            <Button>
                                                                <MoreHoriz className="moreButton" fontSize="large" />
                                                            </Button>
                                                        </Tooltip>
                                                    </CardActions>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>

                                    <Card className="card">
                                        <CardActionArea>
                                            <Grid container direction="row" spacing={3} justify="space-between">
                                                <Grid item xs={12} sm={1}>
                                                    <CardMedia
                                                        component="img"
                                                        height="60"
                                                        width="60"
                                                        image="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                                                        alt="Cubo vermelho, com pontos brancos em um fundo escuro"
                                                    />
                                                </Grid>
                                                <Grid item xs={9} sm={10}>
                                                    <CardContent>
                                                        <Typography variant="h6" component="div">
                                                            Almoço do dia do desenvolvedor
                                                        </Typography>
                                                        <div>
                                                            <a href="#" className="linkType evento">Evento</a>

                                                            <label>Local</label>
                                                            |
                                                            <label>15 OUT</label>
                                                            |
                                                            <Button variant="text" onClick={handleClickOpen}>Convidados</Button>

                                                            <SimpleDialog open={open} onClose={handleClose} />

                                                        </div>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindut...
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                <Grid item xs={2} sm={1}>
                                                    <CardActions>
                                                        <Tooltip title="Mais" placement="right-end">
                                                            <Button>
                                                                <MoreHoriz className="moreButton" fontSize="large" />
                                                            </Button>
                                                        </Tooltip>
                                                    </CardActions>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>

                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <div className="rightBlock">
                                    <Alert icon={false} severity="warning">
                                        <AlertTitle><strong>Endomarketing</strong></AlertTitle>
                                        <Typography variant="body2" gutterBottom>
                                            Endomarketing está relacionado às ações de treinamento ou qualificação
                                            dos colaboradores da empresa visando um melhor serviço para o cliente.
                                            Marketing interno, devido ao nome, é usualmente confundido com Endomarketing
                                            mesmo sendo conceitos diferentes.
                                        </Typography>
                                        <Button color="inherit" size="small" variant="outlined">
                                            DISPENSAR
                                        </Button>
                                    </Alert>
                                </div>

                                <div className="quadros rightBlock">
                                    <div className="quadrosInnerContainer">
                                        <Typography variant="subtitle1" gutterBottom><strong>Quadros de Gestão à Vista</strong></Typography>

                                        <div className="quadro">
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="caption">
                                                    Demonstrativo comercial
                                                </Typography>
                                                <Tooltip title="Público" placement="top-start">
                                                    <a href="#">
                                                        <Public className="rightBlockBtn" fontSize="small" />
                                                    </a>
                                                </Tooltip>
                                                <Tooltip title="Mais" placement="top-start">
                                                    <a href="#">
                                                        <MoreHoriz className="rightBlockBtn" fontSize="small" />
                                                    </a>
                                                </Tooltip>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <a href="#" alt="Mesa de reuniões">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk58854696-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=8b526184adc44ee1b19bcda7bdcb32f6" />
                                                </a>
                                                <a href="#" alt="Mãos sob computadores">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61908787-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=1709af8524843df7003bafc4c53986da" />
                                                </a>
                                                <a href="#" alt="Linhas de código">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61807218-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=add3bdf62f87e5eef613544eaafffb23" />
                                                </a>
                                                <a href="#" alt="Duas mãos dadas">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk62321540-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=45e319bcfa70185e084f768db0675e12" />
                                                </a>
                                            </Stack>
                                        </div>

                                        <div className="quadro">
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="caption">
                                                    Demonstrativo comercial
                                                </Typography>
                                                <Tooltip title="Público" placement="top-start">
                                                    <a href="#">
                                                        <Public className="rightBlockBtn" fontSize="small" />
                                                    </a>
                                                </Tooltip>
                                                <Tooltip title="Mais" placement="top-start">
                                                    <a href="#">
                                                        <MoreHoriz className="rightBlockBtn" fontSize="small" />
                                                    </a>
                                                </Tooltip>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <a href="#" alt="Mesa de reuniões">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk58854696-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=8b526184adc44ee1b19bcda7bdcb32f6" />
                                                </a>
                                                <a href="#" alt="Mãos sob computadores">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61908787-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=1709af8524843df7003bafc4c53986da" />
                                                </a>
                                                <a href="#" alt="Linhas de código">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61807218-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=add3bdf62f87e5eef613544eaafffb23" />
                                                </a>
                                                <a href="#" alt="Duas mãos dadas">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk62321540-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=45e319bcfa70185e084f768db0675e12" />
                                                </a>
                                            </Stack>
                                        </div>

                                        <div className="quadro">
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="caption">
                                                    Demonstrativo comercial
                                                </Typography>
                                                <Tooltip title="Público" placement="top-start">
                                                    <a href="#">
                                                        <Public className="rightBlockBtn" fontSize="small" />
                                                    </a>
                                                </Tooltip>
                                                <Tooltip title="Mais" placement="top-start">
                                                    <a href="#">
                                                        <MoreHoriz className="rightBlockBtn" fontSize="small" />
                                                    </a>
                                                </Tooltip>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <a href="#" alt="Mesa de reuniões">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk58854696-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=8b526184adc44ee1b19bcda7bdcb32f6" />
                                                </a>
                                                <a href="#" alt="Mãos sob computadores">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61908787-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=1709af8524843df7003bafc4c53986da" />
                                                </a>
                                                <a href="#" alt="Linhas de código">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61807218-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=add3bdf62f87e5eef613544eaafffb23" />
                                                </a>
                                                <a href="#" alt="Duas mãos dadas">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk62321540-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=45e319bcfa70185e084f768db0675e12" />
                                                </a>
                                            </Stack>
                                        </div>

                                        <div className="quadro">
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="caption">
                                                    Demonstrativo comercial
                                                </Typography>
                                                <Tooltip title="Público" placement="top-start">
                                                    <a href="#">
                                                        <Public className="rightBlockBtn" fontSize="small" />
                                                    </a>
                                                </Tooltip>
                                                <Tooltip title="Mais" placement="top-start">
                                                    <a href="#">
                                                        <MoreHoriz className="rightBlockBtn" fontSize="small" />
                                                    </a>
                                                </Tooltip>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <a href="#" alt="Mesa de reuniões">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk58854696-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=8b526184adc44ee1b19bcda7bdcb32f6" />
                                                </a>
                                                <a href="#" alt="Mãos sob computadores">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61908787-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=1709af8524843df7003bafc4c53986da" />
                                                </a>
                                                <a href="#" alt="Linhas de código">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61807218-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=add3bdf62f87e5eef613544eaafffb23" />
                                                </a>
                                                <a href="#" alt="Duas mãos dadas">
                                                    <img className="imgRightBlock" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk62321540-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=45e319bcfa70185e084f768db0675e12" />
                                                </a>
                                            </Stack>
                                        </div>

                                    </div>
                                </div>

                            </Grid>

                        </Grid>


                    </Container>
                </div>
            </main>
        </>
    );
}

export default App;