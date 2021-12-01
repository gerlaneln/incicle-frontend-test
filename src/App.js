import './App.css';
import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia,  CssBaseline, FormControl, Grid, InputLabel, Select, MenuItem, Toolbar, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    }
}));

const App = () => {
    const classes = useStyles();

    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <img className="logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQG5yZ5xRYkWfA/company-logo_200_200/0/1625164961092?e=1646265600&v=beta&t=tsNrJYu8BkKIAlo2AhUgVTL9ZKTgTaCU4M37sGle3Go" />
                    <Typography variant="h4">
                        InCicle™
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="large">
                        <div>
                            <Grid container spacing={3} justify="space-between">
                                <Grid item xs={12} sm={8}>
                                    <div>
                                        <Grid container spacing={3} justify="space-between">
                                            <Grid item>
                                                <Typography variant="h4">Endomarketing</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container spacing={3} justify="flex-end">
                                                    <Grid item>
                                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                            <Select
                                                                value={type}
                                                                onChange={handleChange}
                                                                displayEmpty
                                                            >
                                                                <MenuItem value="">
                                                                    <em>Tipo</em>
                                                                </MenuItem>
                                                                <MenuItem value={"event"}>Evento</MenuItem>
                                                                <MenuItem value={"release"}>Publicação</MenuItem>
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
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div>
                                        Barra lateral kjdshakjdhaksdjha
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                    </Container>
                </div>
            </main>
        </>
    );
}

export default App;