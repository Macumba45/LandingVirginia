import { FC, memo, useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SendIcon from '@mui/icons-material/Send';
import { MainContainer } from "./styles";
import { motion, Keyframes } from "framer-motion";

const useStyles = makeStyles({
    root: {
        marginTop: "2rem",
    },
});

const FormContact: FC = () => {
    const classes = useStyles();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Lógica para enviar el formulario
    };


    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setIsVisible(!isVisible);
        }, 1000);
    }, [isVisible]);

    const blinkAnimation = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <>
            <motion.div
                variants={blinkAnimation}
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
            >
                <Typography
                    style={{
                        marginTop: "2rem",
                        fontSize: "2rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Montserrat",
                    }}
                    variant="h6"
                >
                    ¿Preparado para ganar 3000 a 5000€?
                </Typography>
            </motion.div>
            <MainContainer>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2} className={classes.root}>
                        <Grid item>
                            <Typography style={{ fontFamily: 'Montserrat' }} variant="h6">Contáctame</Typography>
                        </Grid>
                        <Grid item>
                            <TextField label="Nombre" variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item>
                            <TextField label="Apellidos" variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item>
                            <TextField label="Email" variant="outlined" type="email" required fullWidth />
                        </Grid>
                        <Grid item>
                            <TextField label="Número de móvil" variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item>
                            <TextField label="¿Cómo nos has conocido?" variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                style={{ backgroundColor: '#E1226B', color: 'white' }}
                                startIcon={<SendIcon />}
                            >
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </MainContainer>
        </>
    );
};

export default memo(FormContact);
