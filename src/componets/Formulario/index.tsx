import { FC, memo, useEffect, useState } from "react";
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import { MainContainer, SentMessage } from "./styles";
import { useNavigate } from "react-router";

const useStyles = makeStyles({
    root: {
        marginTop: "2rem",
    },
});

const FormContact: FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const classes = useStyles();
    const blinkAnimation = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };
    const navigate = useNavigate();


    const options = [
        { value: "Facebook", label: "Facebook" },
        { value: "Instagram", label: "Instagram" },
        { value: "Tiktok", label: "Tiktok" },
        { value: "Google", label: "Google" },
        { value: "Youtube", label: "Youtube" },
        { value: "A friend/coworker", label: "A friend/coworker" },
        { value: "Ads", label: "Ads" },
        { value: "LinkedIn", label: "LinkedIn" },
        { value: "Podcast", label: "Podcast" },
        { value: "Flip Your Future Book", label: "Flip Your Future Book" },
        { value: "Other", label: "Other" },
    ];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        try {
            const response = await fetch(form.action, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: new FormData(form),
            });
            if (response.ok) {
                setModalOpen(true);
            } else {
                throw new Error(response.statusText);
            }
        } catch (error) {
            alert(error);
        }
    };

    const handleClose = () => {
        setModalOpen(false);
        navigate('/contacto')
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
            setIsVisible((prevIsVisible) => !prevIsVisible);
        }, 500);

        if (counter >= 6) {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [counter, isVisible]);

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
                        textAlign: "center",
                    }}
                    variant="h6"
                >
                    ¿Preparado para ganar 3000€ a 5000€?
                </Typography>
            </motion.div>
            <MainContainer>
                <form
                    action="https://formspree.io/f/xbjewjlk"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                        className={classes.root}
                    >
                        <Grid style={{ fontFamily: "montserrat" }} item>
                            <Typography style={{ fontFamily: "Montserrat" }} variant="h6">
                                Contáctame
                            </Typography>
                        </Grid>
                        <Grid style={{ fontFamily: "montserrat" }} item>
                            <TextField
                                label="Nombre"
                                name="Nombre"
                                variant="outlined"
                                required
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid style={{ fontFamily: "montserrat" }} item>
                            <TextField
                                label="Apellidos"
                                variant="outlined"
                                name="Apellidos"
                                required
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid style={{ fontFamily: "montserrat" }} item>
                            <TextField
                                label="Email"
                                variant="outlined"
                                type="email"
                                name="_replyto"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid style={{ fontFamily: "montserrat" }} item>
                            <TextField
                                label="Número de móvil"
                                variant="outlined"
                                name="Número de móvil"
                                required
                                fullWidth
                                type="number"
                            />
                        </Grid>
                        <Grid style={{ fontFamily: "montserrat" }} item>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="select-label">
                                    ¿Cómo nos has conocido?
                                </InputLabel>
                                <Select
                                    labelId="select-label"
                                    name="¿Cómo nos has conocido?"
                                    label="¿Cómo nos has conocido?"
                                    required
                                    defaultValue={"Facebook"}
                                >
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                style={{
                                    fontFamily: "montserrat",
                                    backgroundColor: "#E1226B",
                                    color: "white",
                                    width: "400px",
                                }}
                                startIcon={<SendIcon />}
                            >
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Dialog open={modalOpen} onClose={handleClose}>
                    <DialogTitle>¡Mensaje enviado!</DialogTitle>
                    <DialogContent>
                        <SentMessage>Tu mensaje ha sido enviado con éxito.</SentMessage>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cerrar</Button>
                    </DialogActions>
                </Dialog>
            </MainContainer>
        </>
    );
};

export default memo(FormContact);
